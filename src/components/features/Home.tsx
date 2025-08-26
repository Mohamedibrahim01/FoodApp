import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaPizzaSlice, FaHamburger, FaIceCream, FaCoffee } from "react-icons/fa";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* ===== HERO SECTION ===== */}
      <section className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400 text-white px-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg"
        >
          Delicious Food, Anytime 🍔
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-2xl mb-8 max-w-2xl"
        >
          Fresh, tasty, and made with love – straight from our kitchen to your table.
        </motion.p>

        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            to="/menu"
            className="bg-white text-red-600 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition"
          >
            Order Now
          </Link>
        </motion.div>
      </section>

      {/* ===== CATEGORIES SECTION ===== */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Explore Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { icon: <FaHamburger size={40} />, label: "Burgers" },
            { icon: <FaPizzaSlice size={40} />, label: "Pizza" },
            { icon: <FaIceCream size={40} />, label: "Desserts" },
            { icon: <FaCoffee size={40} />, label: "Drinks" },
          ].map((cat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
            >
              {cat.icon}
              <p className="mt-3 font-semibold text-gray-700">{cat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== POPULAR DISHES SECTION ===== */}
      <section className="py-20 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Popular Dishes
        </h2>

        {/* بعدين هنجيب الـ data من API */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
          {[1, 2, 3, 4, 5, 6].map((dish) => (
            <motion.div
              key={dish}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 rounded-lg shadow-md overflow-hidden"
            >
              <div className="h-48 bg-gradient-to-r from-orange-300 to-red-400 flex items-center justify-center text-white text-2xl font-bold">
                Image
              </div>
              <div className="p-6 text-center space-y-3">
                <h3 className="text-lg font-semibold">Dish Name</h3>
                <p className="text-gray-500">$9.99</p>
                <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition">
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== SPECIAL OFFER SECTION ===== */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">🔥 Special Offer 🔥</h2>
        <p className="mb-6 text-lg">Get 20% OFF on your first order today!</p>
        <Link
          to="/menu"
          className="bg-white text-red-600 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          Claim Offer
        </Link>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-20 bg-gray-900 text-center text-white">
        <h2 className="text-4xl font-extrabold mb-6">Hungry? Let’s fix that 👨‍🍳</h2>
        <div className="flex gap-6 justify-center">
          <Link
            to="/menu"
            className="bg-red-500 px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition"
          >
            View Menu
          </Link>
          <Link
            to="/About"
            className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
