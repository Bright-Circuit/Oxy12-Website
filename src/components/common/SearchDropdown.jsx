"use client";

import {
  Box,
  Paper,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  CircularProgress,
  Divider,
  Button,
} from "@mui/material";
import {
  SearchOff as SearchOffIcon,
  TrendingUp as TrendingIcon,
} from "@mui/icons-material";
import { useRouter } from "next/navigation";
import Image from "next/image";

/**
 * SearchDropdown Component
 * Displays search results in a dropdown below the search input
 *
 * @param {Array} results - Array of search results
 * @param {boolean} isLoading - Loading state
 * @param {string} error - Error message if any
 * @param {boolean} isOpen - Whether dropdown is visible
 * @param {Function} onClose - Callback when dropdown should close
 * @param {Function} onResultClick - Callback when a result is clicked
 * @param {string} searchTerm - Current search term
 */
export default function SearchDropdown({
  results = [],
  isLoading = false,
  error = null,
  isOpen = false,
  onClose = () => {},
  onResultClick = () => {},
  searchTerm = "",
}) {
  const router = useRouter();

  // Don't render if not open
  if (!isOpen) return null;

  /**
   * Handle clicking on a search result
   */
  const handleResultClick = (product) => {
    onResultClick();
    router.push(`/products/${product.productId || product.id}`);
  };

  /**
   * Handle "View all results" click
   */
  const handleViewAll = () => {
    onClose();
    router.push(`/shop?search=${searchTerm}`);
  };

  /**
   * Format price for display
   */
  const formatPrice = (price) => {
    if (!price) return "N/A";
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  return (
    <Paper
      elevation={3}
      sx={{
        position: "absolute",
        top: "100%",
        left: 0,
        right: 0,
        mt: 0.5,
        maxHeight: 400,
        overflowY: "auto",
        zIndex: 1300,
        borderRadius: 2,
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
      }}
    >
      {/* Loading State */}
      {isLoading && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            py: 4,
          }}
        >
          <CircularProgress size={32} sx={{ color: "primary.main" }} />
        </Box>
      )}

      {/* Error State */}
      {error && !isLoading && (
        <Box sx={{ p: 3, textAlign: "center" }}>
          <SearchOffIcon
            sx={{ fontSize: 48, color: "text.secondary", mb: 1 }}
          />
          <Typography variant="body2" color="error">
            {error}
          </Typography>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ mt: 1, display: "block" }}
          >
            Please try again later
          </Typography>
        </Box>
      )}

      {/* No Results State */}
      {!isLoading && !error && results.length === 0 && searchTerm && (
        <Box sx={{ p: 3, textAlign: "center" }}>
          <SearchOffIcon
            sx={{ fontSize: 48, color: "text.secondary", mb: 1 }}
          />
          <Typography variant="body2" color="text.secondary">
            No products found for "{searchTerm}"
          </Typography>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ mt: 1, display: "block" }}
          >
            Try different keywords
          </Typography>
        </Box>
      )}

      {/* Results List */}
      {!isLoading && !error && results.length > 0 && (
        <>
          <List sx={{ p: 0 }}>
            {results.map((product, index) => (
              <Box key={product.productId || product.id || index}>
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => handleResultClick(product)}
                    sx={{
                      py: 1.5,
                      px: 2,
                      "&:hover": {
                        bgcolor: "rgba(255, 140, 66, 0.08)",
                      },
                    }}
                  >
                    {/* Product Info */}
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight: 500,
                          color: "text.primary",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {product.title}
                      </Typography>
                    </Box>

                    {/* Trending Badge (optional) */}
                    {product.trending && (
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 0.5,
                          bgcolor: "primary.light",
                          px: 1,
                          py: 0.5,
                          borderRadius: 1,
                        }}
                      >
                        <TrendingIcon
                          sx={{ fontSize: 14, color: "primary.main" }}
                        />
                        <Typography
                          variant="caption"
                          sx={{ color: "primary.main", fontWeight: 600 }}
                        >
                          Hot
                        </Typography>
                      </Box>
                    )}
                  </ListItemButton>
                </ListItem>
                {index < results.length - 1 && <Divider />}
              </Box>
            ))}
          </List>

          {/* View All Results Button */}
          <Divider />
          <Box sx={{ p: 1.5, bgcolor: "grey.50" }}>
            <Button
              fullWidth
              variant="text"
              onClick={handleViewAll}
              sx={{
                color: "primary.main",
                textTransform: "none",
                fontWeight: 600,
                "&:hover": {
                  bgcolor: "rgba(255, 140, 66, 0.08)",
                },
              }}
            >
              View all {results.length}+ results
            </Button>
          </Box>
        </>
      )}
    </Paper>
  );
}
