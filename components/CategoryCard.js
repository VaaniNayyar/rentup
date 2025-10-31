import Link from 'next/link'

export default function CategoryCard({ category }) {
  return (
    <Link href="/explore">
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
        <div className={`${category.color} h-32 flex items-center justify-center`}>
          <span className="text-6xl">{category.icon}</span>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {category.title}
          </h3>
          <p className="text-gray-600 text-sm">{category.description}</p>
        </div>
      </div>
    </Link>
  )
}
