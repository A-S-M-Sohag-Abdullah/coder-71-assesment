import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/app/types/product'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border rounded p-4 shadow hover:shadow-md transition">
      <Image
        src={product.image}
        alt={product.title}
        width={200}
        height={200}
        className="mx-auto object-contain h-40"
      />
      <h2 className="font-semibold mt-2">{product.title}</h2>
      <p className="text-blue-600 font-bold">${product.price}</p>
      <Link
        href={`/products/${product.id}`}
        className="block mt-2 text-center bg-blue-500 text-white py-1 rounded hover:bg-blue-600"
      >
        View Details
      </Link>
    </div>
  )
}
