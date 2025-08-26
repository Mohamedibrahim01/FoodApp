import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

const fetchMealsByCategory = async (category: string): Promise<Meal[]> => {
  try {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    );
    return res.data.meals || [];
  } catch (err) {
    console.error(err);
    return [];
  }
};

export default function Home() {
  const [seafood, setSeafood] = useState<Meal[]>([]);
  const [normal, setNormal] = useState<Meal[]>([]);
  const [dessert, setDessert] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const seafoodData = await fetchMealsByCategory("Seafood");
      const beefData = await fetchMealsByCategory("Beef");
      const dessertData = await fetchMealsByCategory("Dessert");

      setSeafood(seafoodData);
      setNormal(beefData);
      setDessert(dessertData);
      setLoading(false);
    };

    loadData();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading meals…</p>;

  const renderSection = (title: string, meals: Meal[]) => (
    <div className="mb-12">
      <motion.h2
        className="text-2xl font-bold mb-6 text-gray-800 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {title}
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {meals.slice(0, 6).map((meal) => (
          <motion.div
            key={meal.idMeal}
            className="bg-white rounded-xl shadow-md overflow-hidden max-w-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* الصورة */}
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full h-56 object-cover"
            />

            {/* النص والزر */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                {meal.strMeal}
              </h3>
              <motion.button
                className="px-4 py-2 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600 transition"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Order Now
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-red-100 to-orange-200 py-12 px-6">
      <motion.h1
        className="text-5xl font-bold mb-12 text-center text-red-700 drop-shadow-md"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        🍴 Welcome to Foodie Heaven
      </motion.h1>

      {renderSection("🐟 Seafood", seafood)}
      {renderSection("🥩 Normal Food", normal)}
      {renderSection("🍰 Desserts", dessert)}

      {/* Footer Section */}
      <motion.footer
        className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 text-white py-6 rounded-t-lg shadow-lg w-full"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-6">
          <p className="text-sm">© 2025 Foodie Heaven. All Rights Reserved.</p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="hover:underline hover:text-yellow-200 transition"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:underline hover:text-yellow-200 transition"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:underline hover:text-yellow-200 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
