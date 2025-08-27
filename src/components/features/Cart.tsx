import { useCart } from "@/context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div className="p-8 min-h-screen bg-gradient-to-br from-yellow-100 via-red-100 to-orange-200">
      <h1 className="text-3xl font-bold mb-6 text-red-600">🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600 text-lg">Your cart is empty 😢</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.idMeal}
              className="flex items-center justify-between bg-white shadow-md p-4 rounded"
            >
              {/* صورة + الاسم */}
              <div className="flex items-center gap-4">
                <img
                  src={item.strMealThumb}
                  alt={item.strMeal}
                  className="w-16 h-16 rounded object-cover"
                />
                <div>
                  <h2 className="font-semibold text-lg">{item.strMeal}</h2>
                  <p className="text-gray-500">Price: 50 EGP</p>
                </div>
              </div>

              {/* زرار إزالة */}
              <button
                onClick={() => removeFromCart(item.idMeal)}
                className="text-red-600 font-bold hover:underline"
              >
                Remove
              </button>
            </div>
          ))}

          {/* زرار تفريغ الكارت */}
          <button
            onClick={clearCart}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 mt-6"
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
}
