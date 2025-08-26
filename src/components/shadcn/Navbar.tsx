import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { motion } from "framer-motion";

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 shadow-lg px-8 py-4 flex items-center justify-between sticky top-0 z-50 text-white"
    >
      {/* Logo + Name */}
      <div className="flex items-center gap-3">
        <img
          src="/assets/logo.png"
          alt="Restaurant Logo"
          className="w-10 h-10 rounded-full border-2 border-white shadow-md"
        />
        <Link
          className="font-extrabold text-2xl tracking-wide drop-shadow-md"
          to="/"
        >
          Foodie Heaven
        </Link>
      </div>

      {/* Navigation Links */}
      <NavigationMenu>
        <NavigationMenuList className="flex gap-8">
          {/* Home */}
          <NavigationMenuItem>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link
                to="/"
                className="cursor-pointer hover:text-yellow-200 font-medium transition-colors"
              >
                Home
              </Link>
            </motion.div>
          </NavigationMenuItem>

          {/* About */}
          <NavigationMenuItem>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link
                to="/about"
                className="hover:text-yellow-200 font-medium transition-colors"
              >
                About
              </Link>
            </motion.div>
          </NavigationMenuItem>

          {/* Cart */}
          <NavigationMenuItem>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link
                to="/cart"
                className="relative flex items-center gap-2 hover:text-yellow-200 font-semibold transition-colors"
              >
                <FaShoppingCart className="w-5 h-5" />
                Cart
                {/* Badge */}
                <span className="absolute -top-3 -right-4 bg-white text-red-600 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-md">
                  0
                </span>
              </Link>
            </motion.div>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </motion.nav>
  );
}
