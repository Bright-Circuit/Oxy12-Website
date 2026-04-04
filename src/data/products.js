// Mock product data
export const products = [
  // Men's T-Shirts
  {
    id: 1,
    name: "Men's color T-Shirt",
    slug: "mens-black-tshirt-1",
    category: "men",
    subCategory: "t-shirt",
    price: 1500,
    originalPrice: 1800,
    discount: 17,
    rating: 4.8,
    reviews: 1123,
    colors: ["black", "white", "brown"],
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    inStock: true,
    featured: true,
    image: "https://images.unsplash.com/photo-1527010154944-f2241763d806?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Premium quality cotton t-shirt with modern fit",
  },
  {
    id: 2,
    name: "Men's color T-Shirt",
    slug: "mens-black-tshirt-2",
    category: "men",
    subCategory: "t-shirt",
    price: 1500,
    originalPrice: 1800,
    discount: 17,
    rating: 4.8,
    reviews: 1123,
    colors: ["black", "white", "brown"],
    sizes: ["S", "M", "L", "XL", "2XL"],
    inStock: true,
    featured: true,
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Comfortable everyday t-shirt",
  },
  {
    id: 3,
    name: "Men's color T-Shirt",
    slug: "mens-black-tshirt-3",
    category: "men",
    subCategory: "t-shirt",
    price: 1500,
    originalPrice: 1800,
    discount: 17,
    rating: 4.8,
    reviews: 1123,
    colors: ["black", "yellow", "red"],
    sizes: ["M", "L", "XL", "2XL"],
    inStock: true,
    featured: false,
    image: "https://images.unsplash.com/photo-1618886614638-80e3c103d31a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Stylish casual t-shirt",
  },
  // Men's Hoodies
  {
    id: 4,
    name: "Men's Premium Hoodie",
    slug: "mens-hoodie-black",
    category: "men",
    subCategory: "hoodie",
    price: 3500,
    originalPrice: 4200,
    discount: 17,
    rating: 4.9,
    reviews: 856,
    colors: ["black", "brown", "white"],
    sizes: ["M", "L", "XL", "2XL"],
    inStock: true,
    featured: true,
    image: "https://images.unsplash.com/photo-1617114919297-3c8ddb01f599?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Warm and comfortable hoodie",
  },
  {
    id: 5,
    name: "Men's Long-Sleeves Shirt",
    slug: "mens-longsleeve-1",
    category: "men",
    subCategory: "long-sleeves",
    price: 2200,
    originalPrice: 2600,
    discount: 15,
    rating: 4.7,
    reviews: 654,
    colors: ["black", "white", "brown"],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    featured: false,
    image: "https://images.unsplash.com/photo-1618001789159-ffffe6f96ef2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Classic long sleeve shirt",
  },
  // Women's Collection
  {
    id: 6,
    name: "Women's Elegant Dress",
    slug: "womens-dress-1",
    category: "women",
    subCategory: "dress",
    price: 4500,
    originalPrice: 5400,
    discount: 17,
    rating: 4.9,
    reviews: 1523,
    colors: ["black", "red", "white"],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    featured: true,
    image: "/images/products/women-dress-1.svg",
    description: "Elegant evening dress",
  },
  {
    id: 7,
    name: "Women's Casual Top",
    slug: "womens-top-1",
    category: "women",
    subCategory: "top",
    price: 1800,
    originalPrice: 2200,
    discount: 18,
    rating: 4.6,
    reviews: 892,
    colors: ["white", "black", "yellow"],
    sizes: ["S", "M", "L"],
    inStock: true,
    featured: true,
    image: "/images/products/women-top-1.svg",
    description: "Comfortable casual top",
  },
  {
    id: 8,
    name: "Women's Designer Blouse",
    slug: "womens-blouse-1",
    category: "women",
    subCategory: "blouse",
    price: 2500,
    originalPrice: 3000,
    discount: 17,
    rating: 4.8,
    reviews: 1045,
    colors: ["white", "brown", "black"],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    featured: false,
    image: "/images/products/women-blouse-1.svg",
    description: "Designer blouse for office wear",
  },
  // Accessories
  {
    id: 9,
    name: "Classic Leather Watch",
    slug: "watch-leather-1",
    category: "accessories",
    subCategory: "watches",
    price: 5500,
    originalPrice: 6600,
    discount: 17,
    rating: 4.9,
    reviews: 2341,
    colors: ["brown", "black"],
    sizes: ["One Size"],
    inStock: true,
    featured: true,
    image: "/images/products/watch-1.svg",
    description: "Premium leather strap watch",
  },
  {
    id: 10,
    name: "Designer Sunglasses",
    slug: "sunglasses-1",
    category: "accessories",
    subCategory: "sunglasses",
    price: 2800,
    originalPrice: 3400,
    discount: 18,
    rating: 4.7,
    reviews: 1678,
    colors: ["black", "brown"],
    sizes: ["One Size"],
    inStock: true,
    featured: true,
    image: "/images/products/sunglasses-1.svg",
    description: "UV protection sunglasses",
  },
  {
    id: 11,
    name: "Leather Belt",
    slug: "belt-leather-1",
    category: "accessories",
    subCategory: "belts",
    price: 1200,
    originalPrice: 1500,
    discount: 20,
    rating: 4.6,
    reviews: 543,
    colors: ["black", "brown"],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    featured: false,
    image: "/images/products/belt-1.svg",
    description: "Genuine leather belt",
  },
  {
    id: 12,
    name: "Designer Backpack",
    slug: "backpack-1",
    category: "accessories",
    subCategory: "bags",
    price: 4200,
    originalPrice: 5000,
    discount: 16,
    rating: 4.8,
    reviews: 987,
    colors: ["black", "brown"],
    sizes: ["One Size"],
    inStock: true,
    featured: true,
    image: "/images/products/backpack-1.svg",
    description: "Stylish and spacious backpack",
  },
  {
    id: 13,
    name: "Men's Casual Jacket",
    slug: "mens-jacket-1",
    category: "men",
    subCategory: "jacket",
    price: 4800,
    originalPrice: 5800,
    discount: 17,
    rating: 4.7,
    reviews: 765,
    colors: ["black", "brown", "white"],
    sizes: ["M", "L", "XL", "2XL"],
    inStock: true,
    featured: true,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&auto=format&fit=crop&q=80",
    description: "Stylish casual jacket for all seasons",
  },
  {
    id: 14,
    name: "Men's Denim Jeans",
    slug: "mens-jeans-1",
    category: "men",
    subCategory: "jeans",
    price: 3200,
    originalPrice: 3900,
    discount: 18,
    rating: 4.6,
    reviews: 1234,
    colors: ["black", "brown"],
    sizes: ["S", "M", "L", "XL", "2XL"],
    inStock: true,
    featured: true,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&auto=format&fit=crop&q=80",
    description: "Classic fit denim jeans",
  },
  {
    id: 15,
    name: "Women's Summer Tank Top",
    slug: "womens-tanktop-1",
    category: "women",
    subCategory: "tanktop",
    price: 1200,
    originalPrice: 1500,
    discount: 20,
    rating: 4.5,
    reviews: 678,
    colors: ["white", "black", "yellow", "red"],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    featured: false,
    image: "https://images.unsplash.com/photo-1622445275576-721325763afe?w=800&auto=format&fit=crop&q=80",
    description: "Lightweight summer tank top",
  },
  {
    id: 16,
    name: "Men's Sports Shorts",
    slug: "mens-shorts-1",
    category: "men",
    subCategory: "shorts",
    price: 1800,
    originalPrice: 2200,
    discount: 18,
    rating: 4.6,
    reviews: 892,
    colors: ["black", "brown", "white"],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    featured: false,
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800&auto=format&fit=crop&q=80",
    description: "Comfortable sports shorts",
  },
];

// Helper functions
export const getProductsByCategory = (category) => {
  return products.filter(p => p.category === category);
};

export const getFeaturedProducts = () => {
  return products.filter(p => p.featured);
};

export const getProductById = (id) => {
  return products.find(p => p.id === id);
};

export const getProductBySlug = (slug) => {
  return products.find(p => p.slug === slug);
};

export const filterProducts = (filters) => {
  let filtered = [...products];

  if (filters.category) {
    filtered = filtered.filter(p => p.category === filters.category);
  }

  if (filters.subCategory) {
    filtered = filtered.filter(p => p.subCategory === filters.subCategory);
  }

  if (filters.minPrice !== undefined && filters.maxPrice !== undefined) {
    filtered = filtered.filter(p => p.price >= filters.minPrice && p.price <= filters.maxPrice);
  }

  if (filters.colors && filters.colors.length > 0) {
    filtered = filtered.filter(p => 
      p.colors.some(color => filters.colors.includes(color))
    );
  }

  if (filters.sizes && filters.sizes.length > 0) {
    filtered = filtered.filter(p => 
      p.sizes.some(size => filters.sizes.includes(size))
    );
  }

  if (filters.inStock) {
    filtered = filtered.filter(p => p.inStock);
  }

  // Sorting
  if (filters.sortBy === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (filters.sortBy === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (filters.sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (filters.sortBy === 'popularity') {
    filtered.sort((a, b) => b.reviews - a.reviews);
  }

  return filtered;
};
