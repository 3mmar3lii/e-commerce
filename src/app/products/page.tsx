import ProductCard from "@/components/Product/ProductCard"
import Link from "next/link"

// fetch data on server side => pass to clinet componet to render that data

export default function page() {
  // Array of Products cards from server side 
  
  return (
    <main>
      <h4>Products</h4>
      {[1].map(
        (card: number, index: number) => {
          return (
            <Link href={`/products/${index}`} key={index}>
              <ProductCard />
            </Link>
          );
        },
      )}
    </main>
  );
}
