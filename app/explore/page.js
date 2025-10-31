'use client'

import { useState } from 'react'
import ProductCard from '@/components/ProductCard'

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = [
    'All',
    'Books & Media',
    'Furniture',
    'Appliances',
    'Party & Events',
    'Arts & Crafts',
    'Education',
  ]

  const products = [
    {
      id: 1,
      title: 'Wooden Study Table',
      category: 'Furniture',
      price: 150,
      image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=400',
      rating: 4.5,
      available: true,
    },
    {
      id: 2,
      title: 'Canon DSLR Camera',
      category: 'Party & Events',
      price: 500,
      image: 'https://images.unsplash.com/photo-1606980632586-1b0e9c9dfb0e?w=400',
      rating: 4.8,
      available: true,
    },
    {
      id: 3,
      title: 'Modern Floor Lamp',
      category: 'Furniture',
      price: 80,
      image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400',
      rating: 4.3,
      available: true,
    },
    {
      id: 4,
      title: 'Professional Mixer Grinder',
      category: 'Appliances',
      price: 120,
      image: 'https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=400',
      rating: 4.6,
      available: true,
    },
    {
      id: 5,
      title: 'Fiction Novel Collection',
      category: 'Books & Media',
      price: 30,
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400',
      rating: 4.7,
      available: false,
    },
    {
      id: 6,
      title: 'Party Decoration Kit',
      category: 'Party & Events',
      price: 200,
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400',
      rating: 4.4,
      available: true,
    },
    {
      id: 7,
      title: 'Ergonomic Office Chair',
      category: 'Furniture',
      price: 180,
      image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=400',
      rating: 4.9,
      available: true,
    },
    {
      id: 8,
      title: 'Art Supplies Set',
      category: 'Arts & Crafts',
      price: 90,
      image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400',
      rating: 4.5,
      available: true,
    },
    {
      id: 9,
      title: 'Portable Air Cooler',
      category: 'Appliances',
      price: 250,
      image: 'https://images.unsplash.com/photo-1631545806609-4b0e1b6e1f7f?w=400',
      rating: 4.2,
      available: true,
    },
  ]

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
    const matchesCategory =
      selectedCategory === 'All' || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Explore <span className="text-yellow-300">Categories</span>
          </h1>
          <p className="text-xl text-white/90">
            From everyday essentials to special occasion items - find what you need
            when you need it.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto max-w-6xl px-4 py-6">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for items..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                />
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl">
                  🔍
                </span>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto pb-2 lg:pb-0">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition ${
                    selectedCategory === category
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-gray-600">
            Showing {filteredProducts.length} of {products.length} items
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <span className="text-6xl mb-4 block">🔍</span>
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                No items found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search or filter to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
