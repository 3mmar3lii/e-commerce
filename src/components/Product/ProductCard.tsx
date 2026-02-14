import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { StarRating } from "../StarRating";
import BuyOrAddCart from "../ProductAction/BuyOrAddCart";

export  default function ProductCard() {
  // Mock data — replace with props later
  const product = {
    name: "Samsung Galaxy S20 FE 5G - 8GB RAM, 256GB...",
    description: "Experience flagship performance and stunning...",
    price: 900,
    originalPrice: 1000,
    rating: 3.6,
    reviewCount: 8,
    imageUrl: "/airbods.png", 
  };

  return (
    <div className="bg-white w-50 rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all hover:shadow-md">
      {/* Image & Heart */}
      <div className="relative">
        <div className="aspect-video bg-gray-100 flex items-center justify-center">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover rounded-t-xl"
            priority
            sizes="(max-width: 768px) 100vw, 200px"
          />
        </div>
        <button
          aria-label="Add to wishlist"
          className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-sm hover:bg-gray-50 transition-colors"
        >
          <FaHeart className="text-gray-500 hover:text-red-500" />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mt-1 line-clamp-2">
          {product.description}
        </p>

        {/* Price */}
        <div className="mt-3 flex items-baseline gap-2">
          <span className="text-lg font-bold text-green-600">
            ₹{product.price}
          </span>
          {product.originalPrice && (
            <span className="text-gray-500 line-through text-sm">
              ₹{product.originalPrice}
            </span>
          )}
        </div>

        {/* Rating */}
        <div className="mt-2">
          <StarRating rating={product.rating} count={product.reviewCount} />
        </div>
          <BuyOrAddCart />
      </div>
    </div>
  );
}
