'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Button from '@/components/Button'

const API_BASE = process.env.NEXT_PUBLIC_API_BASE

export default function PostPage() {
  const router = useRouter()

  const [formData, setFormData] = useState({
    title: '',
    category: '',
    listingType: '',
    price: '',
    location: '',
    description: '',
  })

  const [images, setImages] = useState([])
  const [imagePreviews, setImagePreviews] = useState([])

  const categories = [
    'Books & Media',
    'Furniture',
    'Appliances',
    'Party & Events',
    'Arts & Crafts',
    'Education',
  ]

  const listingTypes = ['Daily Rental', 'Monthly Rental', 'One-time Event']

  useEffect(() => {
    const token = localStorage.getItem("rentup_token")
    if (!token) {
      alert("Please login first!")
      router.push("/login")
    }
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files)
    if (files.length + images.length > 5) {
      alert("You can only upload up to 5 images")
      return
    }

    setImages((prev) => [...prev, ...files])

    const newPreviews = files.map((file) => URL.createObjectURL(file))
    setImagePreviews((prev) => [...prev, ...newPreviews])
  }

  const removeImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index))
    setImagePreviews((prev) => prev.filter((_, i) => i !== index))
  }

  // ------------- SUBMIT FORM -------------
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      // 1) UPLOAD IMAGES
      const uploadForm = new FormData()
      images.forEach((img) => uploadForm.append("images", img))

      const uploadRes = await fetch(`${API_BASE}/post/upload-images`, {
        method: "POST",
        body: uploadForm,
      })

      const uploadData = await uploadRes.json()

      if (!uploadRes.ok || !uploadData.urls) {
        alert("Failed to upload images")
        return
      }

      // 2) CREATE LISTING
      const listingRes = await fetch(`${API_BASE}/post/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          images: uploadData.urls,
        }),
      })

      const listingData = await listingRes.json()

      if (listingRes.ok) {
        alert("Listing posted successfully!")
        router.push("/explore")
      } else {
        alert("Failed to post listing: " + listingData.error)
      }
    } catch (err) {
      console.error(err)
      alert("Something went wrong!")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* HEADER */}
        <h1 className="text-4xl font-bold mb-4">Post a New Listing</h1>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow">

          {/* Title */}
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={handleInputChange}
            required
            className="w-full p-3 border rounded mb-4"
          />

          {/* Category */}
          <select
            name="category"
            onChange={handleInputChange}
            required
            className="w-full p-3 border rounded mb-4"
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          {/* Listing Type */}
          <select
            name="listingType"
            onChange={handleInputChange}
            required
            className="w-full p-3 border rounded mb-4"
          >
            <option value="">Select Listing Type</option>
            {listingTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>

          {/* Price */}
          <input
            type="text"
            name="price"
            placeholder="Price"
            onChange={handleInputChange}
            required
            className="w-full p-3 border rounded mb-4"
          />

          {/* Location */}
          <input
            type="text"
            name="location"
            placeholder="Location"
            onChange={handleInputChange}
            required
            className="w-full p-3 border rounded mb-4"
          />

          {/* Description */}
          <textarea
            name="description"
            placeholder="Description"
            rows="5"
            onChange={handleInputChange}
            required
            className="w-full p-3 border rounded mb-4"
          ></textarea>

          {/* IMAGES */}
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageChange}
            className="mb-4"
          />

          {/* PREVIEW */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            {imagePreviews.map((src, index) => (
              <div key={index} className="relative">
                <img src={src} className="w-full h-32 object-cover rounded" />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full px-2"
                >
                  X
                </button>
              </div>
            ))}
          </div>

          <Button type="submit" variant="primary" size="large" fullWidth>
            Post Listing
          </Button>
        </form>
      </div>
    </div>
  )
}
