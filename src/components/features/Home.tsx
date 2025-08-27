import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { FaStar, FaClock, FaFire, FaArrowRight } from "react-icons/fa";

export interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory?: string;
  strArea?: string;
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

// Deterministic pricing function - generates consistent prices based on meal ID
const generateStablePrice = (mealId: string): number => {
  // Convert meal ID to a number and use modulo to get consistent price
  const numericId = parseInt(mealId, 10);
  const basePrice = 15; // Minimum price
  const priceRange = 30; // Price range
  
  // Use modulo to get a consistent price between $15-$45
  const price = basePrice + (numericId % priceRange);
  return price;
};

// Deterministic rating function
const generateStableRating = (mealId: string): string => {
  const numericId = parseInt(mealId, 10);
  const baseRating = 3.0;
  
  const rating = baseRating + (numericId % 20) / 10; // Creates ratings between 3.0-5.0
  return rating.toFixed(1);
};

// Deterministic prep time function
const generateStablePrepTime = (mealId: string): number => {
  const numericId = parseInt(mealId, 10);
  const baseTime = 15;
  const timeRange = 30;
  
  return baseTime + (numericId % timeRange);
};

// Deterministic calories function
const generateStableCalories = (mealId: string): number => {
  const numericId = parseInt(mealId, 10);
  const baseCalories = 200;
  const caloriesRange = 400;
  
  return baseCalories + (numericId % caloriesRange);
};

export default function Home() {
  const [seafood, setSeafood] = useState<Meal[]>([]);
  const [beef, setBeef] = useState<Meal[]>([]);
  const [dessert, setDessert] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const loadData = async () => {
      const seafoodData = await fetchMealsByCategory("Seafood");
      const beefData = await fetchMealsByCategory("Beef");
      const dessertData = await fetchMealsByCategory("Dessert");

      setSeafood(seafoodData);
      setBeef(beefData);
      setDessert(dessertData);
      setLoading(false);
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  const renderMealCard = (meal: Meal, category: string) => {
    // Use deterministic functions to generate consistent values
    const price = generateStablePrice(meal.idMeal);
    const rating = generateStableRating(meal.idMeal);
    const prepTime = generateStablePrepTime(meal.idMeal);
    const calories = generateStableCalories(meal.idMeal);

    return (
      <motion.div
        key={meal.idMeal}
        className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative overflow-hidden">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-gray-800">
            ${price}
          </div>
          <div className="absolute top-3 left-3 bg-red-500 text-white rounded-full px-3 py-1 text-sm font-semibold">
            {category}
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-red-600 transition-colors">
            {meal.strMeal}
          </h3>

          <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <FaStar className="text-yellow-400" />
              <span>{rating}</span>
            </div>
            <div className="flex items-center gap-1">
              <FaClock className="text-blue-400" />
              <span>{prepTime}m</span>
            </div>
            <div className="flex items-center gap-1">
              <FaFire className="text-orange-400" />
              <span>{calories} cal</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-red-600">${price}</span>
            <motion.button
              className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-red-600 hover:to-orange-600 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                addToCart({
                  id: meal.idMeal,
                  name: meal.strMeal,
                  price: price,
                  image: meal.strMealThumb,
                  quantity: 1,
                })
              }
            >
              Add to Cart
              <FaArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    );
  };

  const renderSection = (
    title: string,
    meals: Meal[],
    category: string,
    icon: string
  ) => (
    <motion.section
      className="mb-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-12">
        <motion.div
          className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mb-4"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <span className="text-3xl">{icon}</span>
        </motion.div>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">{title}</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Discover our amazing selection of {title.toLowerCase()} prepared with
          the finest ingredients
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {meals.slice(0, 6).map((meal) => renderMealCard(meal, category))}
      </div>
    </motion.section>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
      {/* Hero Section */}
      <motion.section
        className="relative py-20 px-6 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <motion.h1
            className="text-6xl md:text-7xl font-bold mb-6 text-gray-800"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Welcome to{" "}
            <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              Foodie Heaven
            </span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experience culinary excellence with our handcrafted dishes, prepared
            with passion and the finest ingredients from around the world.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          ></motion.div>
        </div>
      </motion.section>

      {/* Featured Categories */}
      <div className="px-6">
        {renderSection("Fresh Seafood", seafood, "Seafood", "🐟")}
        {renderSection("Premium Beef", beef, "Beef", "🥩")}
        {renderSection("Sweet Desserts", dessert, "Dessert", "🍰")}
      </div>

      {/* Features Section */}
      <motion.section
        className="py-20 px-6 bg-white/50"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-gray-600 text-lg">
              We're committed to delivering exceptional dining experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🌟",
                title: "Premium Quality",
                description:
                  "Only the finest ingredients make it to your plate",
              },
              {
                icon: "🚀",
                title: "Fast Delivery",
                description: "Your food arrives hot and fresh, every time",
              },
              {
                icon: "💝",
                title: "Customer First",
                description: "Your satisfaction is our top priority",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="bg-gradient-to-r from-red-600 via-orange-600 to-red-700 text-white py-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Foodie Heaven</h3>
              <p className="text-gray-200 mb-4">
                Experience the perfect blend of tradition and innovation in
                every dish we serve.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-yellow-200 transition-colors">
                  Facebook
                </a>
                <a href="#" className="hover:text-yellow-200 transition-colors">
                  Instagram
                </a>
                <a href="#" className="hover:text-yellow-200 transition-colors">
                  Twitter
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-yellow-200 transition-colors"
                  >
                    Menu
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-yellow-200 transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-yellow-200 transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-yellow-200 transition-colors"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-200">
                <li>123 Food Street</li>
                <li>Culinary City, CC 12345</li>
                <li>Phone: (555) 123-4567</li>
                <li>Email: info@foodieheaven.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-gray-200">
            <p>&copy; 2025 Foodie Heaven. All rights reserved.</p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
