import Link from 'next/link'
import CategoryCard from '@/components/CategoryCard'
import Button from '@/components/Button'

export default function HomePage() {
  const categories = [
    {
      id: 1,
      title: 'Books & Media',
      description: 'Educational books, novels, magazines',
      icon: '📚',
      color: 'bg-blue-500',
    },
    {
      id: 2,
      title: 'Furniture',
      description: 'Beds, sofas, tables, storage',
      icon: '🛋️',
      color: 'bg-orange-500',
    },
    {
      id: 3,
      title: 'Appliances',
      description: 'Kitchen, cleaning, electronics',
      icon: '🔧',
      color: 'bg-purple-500',
    },
    {
      id: 4,
      title: 'Party & Events',
      description: 'Decorations, equipment, supplies',
      icon: '🎉',
      color: 'bg-pink-500',
    },
    {
      id: 5,
      title: 'Arts & Crafts',
      description: 'Painting, DIY, hobby items',
      icon: '🎨',
      color: 'bg-green-500',
    },
    {
      id: 6,
      title: 'Education',
      description: 'Learning materials, courses',
      icon: '🎓',
      color: 'bg-indigo-500',
    },
  ]

  const impactStats = [
    {
      value: '40%',
      label: 'Carbon Footprint Reduced',
      description: 'By choosing rentals over purchases',
    },
    {
      value: '5,000+',
      label: 'Active Community Members',
      description: 'Growing network of conscious consumers',
    },
    {
      value: '15,000+',
      label: 'Items in Circulation',
      description: 'Reducing production and waste',
    },
    {
      value: '60%',
      label: 'Cost Savings',
      description: 'Average savings vs. buying new',
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="inline-block bg-white/20 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium">🌱 Our Environmental Impact</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Rent Smart. Save More.
            <br />
            <span className="text-yellow-300">Live Sustainably.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Every rental contributes to a more sustainable future. Join our community
            and make a difference together.
          </p>
          <Link href="/explore">
            <Button variant="secondary" size="large">
              Explore Rentals →
            </Button>
          </Link>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Making a <span className="text-primary">Difference</span> Together
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              See the collective impact our community has achieved through conscious
              consumption.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">
                    {index === 0 && '♻️'}
                    {index === 1 && '👥'}
                    {index === 2 && '📦'}
                    {index === 3 && '📊'}
                  </span>
                </div>
                <h3 className="text-4xl font-bold text-primary mb-2">{stat.value}</h3>
                <p className="font-semibold text-gray-800 mb-1">{stat.label}</p>
                <p className="text-sm text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-primary">RentUp</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              RentUp is a sustainable rental marketplace that promotes the circular
              economy. We believe in conscious consumption, affordability, and
              environmental responsibility. By choosing to rent instead of buy, you're
              reducing waste, saving money, and contributing to a healthier planet.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🌍</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sustainable Living</h3>
              <p className="text-gray-600">
                Reduce your carbon footprint by embracing the sharing economy
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Save Money</h3>
              <p className="text-gray-600">
                Access quality items at a fraction of the purchase cost
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
              <p className="text-gray-600">
                Connect with like-minded individuals who value sustainability
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Explore <span className="text-primary">Categories</span>
            </h2>
            <p className="text-gray-600 text-lg">
              From everyday essentials to special occasion items - find what you need
              when you need it.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of users who are already renting smarter and living more
            sustainably.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/explore">
              <Button variant="secondary" size="large">
                Start Exploring
              </Button>
            </Link>
            <Link href="/login">
              <Button
                variant="outline"
                size="large"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Login / Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
