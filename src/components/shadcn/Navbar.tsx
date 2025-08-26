import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { motion } from "framer-motion";
//import { Link as ScrollLink } from "react-scroll";

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white shadow-lg px-8 py-4 flex items-center justify-between sticky top-0 z-50"
    >
      {/* Logo + Name */}
      <div className="flex items-center gap-3">
        <img
          src="/assets/logo.png"
          alt="Restaurant Logo"
          className="w-10 h-10 rounded-full border-2 border-red-600"
        />
        <Link
          className="font-extrabold text-2xl text-red-600 tracking-wide"
          to="/"
        >
          MyRestaurant
        </Link>
      </div>

      {/* Navigation Links */}
      <NavigationMenu>
        <NavigationMenuList className="flex gap-8">
          {/* Home with react-scroll */}
          <NavigationMenuItem>
            <motion.div whileHover={{ scale: 1.1 }}>
              <a
                href="/"
                className="cursor-pointer hover:text-red-600 text-gray-700 font-medium transition-colors"
              >
                Home
              </a>
            </motion.div>
          </NavigationMenuItem>

          {/* Menu */}
          <NavigationMenuItem>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link
                to="/menu"
                className="hover:text-red-600 text-gray-700 font-medium transition-colors"
              >
                Menu
              </Link>
            </motion.div>
          </NavigationMenuItem>

          {/* About */}
          <NavigationMenuItem>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link
                to="/about"
                className="hover:text-red-600 text-gray-700 font-medium transition-colors"
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
                className="relative flex items-center gap-2 text-gray-700 hover:text-red-600 font-semibold transition-colors"
              >
                <FaShoppingCart className="w-5 h-5" />
                Cart
                {/* Badge */}
                <span className="absolute -top-3 -right-4 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-md">
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
