import { useState, useEffect, useRef, useCallback } from "react";
import { searchPublicProducts } from "../services/product.service";

/**
 * Custom hook for real-time product search with debounce and request cancellation
 *
 * Features:
 * - Debounced search (300ms default)
 * - Automatic request cancellation on new input
 * - Minimum character requirement (2 chars default)
 * - Loading and error states
 * - Empty input handling
 *
 * @param {number} debounceDelay - Delay in ms before triggering search (default: 300)
 * @param {number} minChars - Minimum characters required to trigger search (default: 2)
 * @returns {Object} Search state and handlers
 */
export function useSearch(debounceDelay = 300, minChars = 2) {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  // Refs for cleanup and cancellation
  const abortControllerRef = useRef(null);
  const debounceTimerRef = useRef(null);

  /**
   * Perform the actual search API call
   */
  const performSearch = useCallback(async (query) => {
    // Cancel previous request if exists
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    // Create new AbortController for this request
    abortControllerRef.current = new AbortController();

    setIsLoading(true);
    setError(null);

    try {
      // Call search API with size parameter for lightweight results and pass the abort signal
      const response = await searchPublicProducts(
        query,
        { size: 10 },
        { signal: abortControllerRef.current.signal },
      );

      if (response && response.success) {
        setResults(response.data || []);
        setIsOpen(true);
      } else {
        setError("Failed to fetch results");
        setResults([]);
      }
    } catch (err) {
      // Ignore cancellation errors
      const isAbort =
        err.name === "AbortError" ||
        err.name === "CanceledError" ||
        err.message === "canceled";
      if (!isAbort) {
        setError(err.message || "An error occurred while searching");
        setResults([]);
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  /**
   * Debounced search effect
   * Triggers search after user stops typing for debounceDelay ms
   */
  useEffect(() => {
    // Clear previous timer
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    // Clear results and close dropdown if input is empty
    if (!searchTerm || searchTerm.trim() === "") {
      setResults([]);
      setIsOpen(false);
      setError(null);
      setIsLoading(false);
      return;
    }

    // Don't search if below minimum characters
    if (searchTerm.trim().length < minChars) {
      setResults([]);
      setIsOpen(false);
      setError(null);
      return;
    }

    // Set new debounce timer
    debounceTimerRef.current = setTimeout(() => {
      performSearch(searchTerm.trim());
    }, debounceDelay);

    // Cleanup function
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, [searchTerm, debounceDelay, minChars, performSearch]);

  /**
   * Cleanup on unmount
   */
  useEffect(() => {
    return () => {
      // Cancel ongoing request
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
      // Clear debounce timer
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, []);

  /**
   * Clear search and results
   */
  const clearSearch = useCallback(() => {
    setSearchTerm("");
    setResults([]);
    setIsOpen(false);
    setError(null);
    setIsLoading(false);

    // Cancel any ongoing request
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    // Clear debounce timer
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }
  }, []);

  /**
   * Close dropdown without clearing search
   */
  const closeDropdown = useCallback(() => {
    setIsOpen(false);
  }, []);

  /**
   * Open dropdown if there are results
   */
  const openDropdown = useCallback(() => {
    if (results.length > 0) {
      setIsOpen(true);
    }
  }, [results.length]);

  return {
    searchTerm,
    setSearchTerm,
    results,
    isLoading,
    error,
    isOpen,
    clearSearch,
    closeDropdown,
    openDropdown,
  };
}
