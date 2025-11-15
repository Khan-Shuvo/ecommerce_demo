import React, { useState } from 'react'
import SectionHeading from '../SectionHeading'
import useData from '../../hooks/useData'
import ProductCard from '../ProductCard'

export default function PopulerProducts() {
  const { categorys, products } = useData()
  const [categoryId, setCategoryId] = useState(null)

  const handleCategoryId = (id) => {
    setCategoryId(id)
  }

  const filterProduct = categoryId ?
    products.filter(p => p.categoryId === categoryId) :
    products

  return (
    <div className="container mx-auto px-4 md:px-12 lg:px-24 py-16">

      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <SectionHeading
          heading="Populer"
          colorHeading="products"
          description="Shop online for new arrivals and get free shipping"
        />

        <div className="flex flex-wrap gap-4 md:gap-8 text-gray-700 text-sm md:text-base">
          {categorys.map(category => (
            <p
              key={category.id}
              onClick={() => handleCategoryId(category.id)}
              className={`cursor-pointer hover:text-[#5CAF90] transition ${categoryId === category.id ? "text-[#5CAF90] font-semibold" : ""
                }`}
            >
              {category.name}
            </p>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="my-10">
        <div className="
          grid 
          grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
          gap-6 place-items-center
        ">
          {filterProduct
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 4)
            .map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          }
        </div>
      </div>
    </div>
  )
}
