'use client'

import { useState, useMemo } from 'react'
import ProductCard from './ProductCard'
import SearchBar from './Searchbar'
import { Product } from '@/app/types/product'

export default function ProductList({ initialProducts }: { initialProducts: Product[] }) {
  const [search, setSearch] = useState('')

  const filteredProducts = useMemo(() => {
    return initialProducts.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    )
  }, [initialProducts, search])

  return (
    <>
      <SearchBar onSearch={setSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  )
}
