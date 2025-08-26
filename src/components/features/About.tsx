"use client";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-orange-50 to-red-100 text-gray-800">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center py-20 px-6"
      >
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
          About Us
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-700 leading-relaxed">
          Since day one, <span className="font-semibold">MyRestaurant</span> was
          born with a simple idea: serving fresh, delicious, and balanced food
          that makes every meal a memorable experience.
        </p>
      </motion.div>

      {/* Story Section */}
      <motion.section
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="px-8 py-16 max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <h2 className="text-3xl font-bold text-red-600">Our Story</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Our journey started with passion for food and authentic recipes that
            combine tradition with a modern twist. Every dish is made with
            locally sourced ingredients, prepared daily with love and care.
          </p>
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="px-8 py-16 max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <h2 className="text-3xl font-bold text-orange-500">Our Mission</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Our mission is simple: turn every meal into a reason to smile.
            Whether you're having lunch with family, hanging out with friends,
            or grabbing a quick bite — you’ll always find quality, warmth, and a
            taste to remember.
          </p>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="px-8 py-20 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 text-white text-center"
      >
        <h2 className="text-3xl font-bold">Our Values</h2>
        <ul className="mt-6 space-y-3 max-w-md mx-auto text-lg font-medium">
          <li>🍴 Taste comes first</li>
          <li>🥦 Fresh ingredients daily</li>
          <li>⚡ Fast service with a smile</li>
          <li>🏡 A cozy and welcoming experience</li>
        </ul>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="px-8 py-20 max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold text-red-600">Get in Touch</h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Got a question, feedback, or just want to say hi? We’d love to hear
          from you!
        </p>
        <div className="mt-6 space-y-2 text-lg font-medium text-gray-800">
          <p className="flex items-center justify-center gap-2">
            <FaEnvelope className="text-red-600" /> contact@myrestaurant.com
          </p>
          <p className="flex items-center justify-center gap-2">
            <FaPhone className="text-red-600" /> +20 123 456 789
          </p>
        </div>

        <div className="flex justify-center gap-6 mt-6 text-2xl text-red-600">
          <a href="https://facebook.com" target="_blank" rel="noopener">
            <FaFacebookF className="hover:text-blue-600 transition" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener">
            <FaInstagram className="hover:text-pink-500 transition" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener">
            <FaTwitter className="hover:text-sky-500 transition" />
          </a>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center py-16"
      >
        <a
          href="/menu"
          className="inline-block bg-gradient-to-r from-red-600 to-orange-500 text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg hover:scale-105 transition-transform"
        >
          Discover Our Menu 🍔
        </a>
      </motion.div>
    </div>
  );
}
