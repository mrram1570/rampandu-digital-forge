
import React from 'react';
import ProductCard from './ProductCard';

interface ProductGridProps {
  searchQuery: string;
  selectedCategory: string;
  priceRange: number[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ searchQuery, selectedCategory, priceRange }) => {
  // Women's fashion dress product data for ages 15-22
  const products = [
    {
      id: 1,
      name: "Floral Summer Midi Dress",
      price: 2499,
      originalPrice: 3999,
      image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&h=1000&fit=crop&crop=center",
      category: "casual-chic",
      isNew: true,
      isSale: true
    },
    {
      id: 2,
      name: "Elegant Cocktail Dress",
      price: 3899,
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&h=1000&fit=crop&crop=center",
      category: "party-glam",
      isNew: false,
      isSale: false
    },
    {
      id: 3,
      name: "Romantic Lace Evening Dress",
      price: 4199,
      image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=800&h=1000&fit=crop&crop=center",
      category: "date-night",
      isNew: true,
      isSale: false
    },
    {
      id: 4,
      name: "Chic Wrap Dress",
      price: 2799,
      originalPrice: 3899,
      image: "https://images.unsplash.com/photo-1582142306909-195724d33dca?w=800&h=1000&fit=crop&crop=center",
      category: "casual-chic",
      isNew: false,
      isSale: true
    },
    {
      id: 5,
      name: "Boho Maxi Dress",
      price: 3299,
      image: "https://images.unsplash.com/photo-1566174532577-c7c8e8c8e0f8?w=800&h=1000&fit=crop&crop=center",
      category: "casual-chic",
      isNew: false,
      isSale: false
    },
    {
      id: 6,
      name: "Sparkly Party Dress",
      price: 4599,
      image: "https://images.unsplash.com/photo-1566174532300-65b4bb7a5d76?w=800&h=1000&fit=crop&crop=center",
      category: "party-glam",
      isNew: true,
      isSale: false
    },
    {
      id: 7,
      name: "Vintage Inspired A-Line Dress",
      price: 2899,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=1000&fit=crop&crop=center",
      category: "date-night",
      isNew: false,
      isSale: false
    },
    {
      id: 8,
      name: "Glam Sequin Mini Dress",
      price: 3799,
      originalPrice: 4999,
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800&h=1000&fit=crop&crop=center",
      category: "party-glam",
      isNew: true,
      isSale: true
    }
  ];

  // Filter products based on search, category, and price
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          {filteredProducts.length} Products Found
        </h2>
        <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-500">
          <option>Sort by: Featured</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Newest First</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
