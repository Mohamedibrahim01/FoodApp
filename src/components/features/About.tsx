"use client";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaUtensils,
  FaHeart,
  FaAward,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
      {/* Hero Section */}
      <motion.section
        className="relative py-20 px-6 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <motion.h1
            className="text-6xl md:text-7xl font-bold mb-6 text-gray-800"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About{" "}
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
            Where passion meets perfection, and every meal tells a story of culinary excellence
          </motion.p>
        </div>
      </motion.section>

      {/* Story Section */}
      <motion.section
        className="py-20 px-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Founded in 2010, Foodie Heaven began as a small family restaurant with a big dream: 
                to create extraordinary dining experiences that bring people together through the 
                universal language of food.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                What started as a humble kitchen has grown into a culinary destination, 
                where every dish is crafted with love, tradition, and innovation. Our chefs 
                combine time-honored recipes with modern techniques to create unforgettable flavors.
              </p>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-gradient-to-br from-red-500 to-orange-500 rounded-3xl p-8 text-white text-center">
                <FaUtensils className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">15+ Years</h3>
                <p className="text-lg">of Culinary Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Mission & Vision */}
      <motion.section
        className="py-20 px-6 bg-white/50"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              className="text-center p-8 bg-white rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaHeart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To create extraordinary dining experiences that nourish not just the body, 
                but the soul. We believe that great food has the power to bring people 
                together and create lasting memories.
              </p>
            </motion.div>

            <motion.div
              className="text-center p-8 bg-white rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaAward className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the most beloved culinary destination, known for our commitment 
                to quality, innovation, and the art of hospitality. We strive to set 
                new standards in the food industry.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section
        className="py-20 px-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-gray-600 text-lg">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🌟",
                title: "Excellence",
                description: "We never compromise on quality, striving for perfection in every detail"
              },
              {
                icon: "🌱",
                title: "Sustainability",
                description: "Committed to eco-friendly practices and supporting local farmers"
              },
              {
                icon: "💝",
                title: "Passion",
                description: "Every dish is made with love and genuine care for our customers"
              },
              {
                icon: "🤝",
                title: "Community",
                description: "Building lasting relationships with our customers and local community"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        className="py-20 px-6 bg-gradient-to-r from-red-600 via-orange-600 to-red-700 text-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-200">We'd love to hear from you!</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <FaMapMarkerAlt className="w-8 h-8 mx-auto mb-4 text-yellow-300" />
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-200">123 Food Street<br />Culinary City, CC 12345</p>
            </motion.div>
            
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <FaPhone className="w-8 h-8 mx-auto mb-4 text-yellow-300" />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-200">(555) 123-4567<br />Mon-Sun: 11AM-10PM</p>
            </motion.div>
            
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <FaEnvelope className="w-8 h-8 mx-auto mb-4 text-yellow-300" />
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-200">info@foodieheaven.com<br />hello@foodieheaven.com</p>
            </motion.div>
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex justify-center gap-6 text-2xl mb-8">
              <a href="#" className="hover:text-yellow-300 transition-colors">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-yellow-300 transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-yellow-300 transition-colors">
                <FaTwitter />
              </a>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="py-20 px-6 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Ready to Experience Foodie Heaven?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join us for an unforgettable culinary journey that will delight your senses
          </p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              to="/"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-xl text-lg hover:from-red-600 hover:to-orange-600 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Explore Our Menu
            </Link>
            <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-red-500 text-red-500 font-semibold rounded-xl text-lg hover:bg-red-500 hover:text-white transition-all duration-200">
              Make a Reservation
            </button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
