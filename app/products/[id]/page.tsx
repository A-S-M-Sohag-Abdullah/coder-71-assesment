import Image from "next/image";
import Link from "next/link";
import { Product } from "@/app/types/product";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";
import AddToCartButton from "@/app/components/AddtoCartBtn";
// Server-side fetch
async function getProduct(id: string): Promise<Product> {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  return res.json();
}

// Optional: SEO metadata
export async function generateMetadata({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);

  return {
    title: `${product.title} | Product Catalog`,
    description: product.description,
  };
}

export default async function ProductDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    redirect("/login");
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET!);
  } catch {
    redirect("/login");
  }

  const product = await getProduct(params.id);

  return (
    <main className="p-6">
      <Link href="/" className="text-blue-600 underline mb-4 inline-block">
        ← Back to Home
      </Link>

      <div className="flex flex-col md:flex-row gap-8 mt-4">
        <Image
          src={product.image}
          alt={product.title}
          width={300}
          height={300}
          className="object-contain max-h-[300px] mx-auto"
        />
        <div>
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-gray-500 capitalize mb-2">{product.category}</p>
          <p className="text-xl font-semibold text-blue-600">
            ${product.price}
          </p>
          <p className="mt-4">{product.description}</p>
          <AddToCartButton product={product} />
        </div>
      </div>
    </main>
  );
}
