import { FaShoppingCart } from "react-icons/fa"

function BuyOrAddCart() {
  return (
    <div>
    <div className="mt-4 flex gap-3">
          <button
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Buy now"
          >
            Buy Now
          </button>
          <button
            className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            aria-label="Add to cart"
          >
            <FaShoppingCart className="text-gray-700" />
          </button>
        </div>
        </div>
  )
}

export default BuyOrAddCart
