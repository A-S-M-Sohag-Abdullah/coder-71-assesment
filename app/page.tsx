import ProductList from "./components/ProductList";
import { Product } from "./types/product";

export default async function Home() {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });
  const products: Product[] = await res.json();
  return (
    <main className="p-4">
      <ProductList initialProducts={products} />
    </main>
  );
}
