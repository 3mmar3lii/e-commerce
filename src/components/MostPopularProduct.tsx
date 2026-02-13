import Image from "next/image";
import { FiHeart } from "react-icons/fi";
import BuyOrAddCart from "./ProductAction/BuyOrAddCart";

export default function MostPopularProduct() {
  return (
    <div className="px-4 py-12 sm:px-6 lg:px-8 bg-gray-100">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 mx-20 px-3">
        {/* Text Content */}
        <div className="flex-1 min-w-0">
          <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-600 uppercase tracking-wide">
            New Fashion
          </span>
          <h1 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            Apple iPhone 15 Plus Mini 128GB - Pink
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl">
            Discover the power of the Apple iPhone 15 Plus Mini in Pink, with
            128GB storage, advanced camera technology, and a...
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <BuyOrAddCart />
            <button className="p-2.5 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-300">
              <FiHeart className="w-5 h-5 mt-4" />
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="shrink-0">
          <Image
            src="/most-popular.png"
            alt="Apple iPhone 15 Plus Mini in Pink"
            className="object-cover rounded-xl"
            priority
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}
