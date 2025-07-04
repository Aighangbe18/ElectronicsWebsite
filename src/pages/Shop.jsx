import { useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";

const products = [
  { id: 1, name: "Bluetooth Speaker", category: "headset", price: 49.99, image: "/images/bluetooth.avif", description: "Portable speaker with great sound." },
  { id: 2, name: "Wireless Earpods", category: "headset", price: 29.99, image: "/images/earpod.avif", description: "Crystal-clear sound and sleek design." },
  { id: 3, name: "Gaming Headphones", category: "headset", price: 39.99, image: "/images/headphonesbalo.avif", description: "Immersive audio for gaming." },
  { id: 4, name: "Office Headset", category: "headset", price: 24.99, image: "/images/headset.avif", description: "Comfortable headset for daily use." },
  { id: 5, name: "Laptop Pro X", category: "computer", price: 999.99, image: "/images/laptop.avif", description: "High performance laptop for work and play." },
  { id: 6, name: "Smartphone Lite", category: "mobile", price: 299.99, image: "/images/lightsmartphone.avif", description: "Affordable and powerful smartphone." },
  { id: 7, name: "Smartphone Max", category: "mobile", price: 599.99, image: "/images/smartphone.avif", description: "Top-tier smartphone with great camera." },
  { id: 8, name: "Portable Speaker", category: "headset", price: 89.99, image: "/images/speaker.avif", description: "Compact speaker for on-the-go sound." },
  { id: 9, name: "Tablet Z10", category: "tablet", price: 199.99, image: "/images/tablet.avif", description: "Perfect for streaming and light work." },
  { id: 10, name: "Ultra HD TV", category: "tv", price: 799.99, image: "/images/tv.avif", description: "Experience stunning 4K entertainment." },
  { id: 11, name: "Smart Watch", category: "mobile", price: 149.99, image: "/images/wristwatch.avif", description: "Track your fitness and stay connected." },
  { id: 12, name: "Drone SkyPro", category: "drones", price: 499.99, image: "/images/product4.jpg", description: "Capture amazing aerial footage." },
];

const categories = ["all", "mobile", "drones", "headset", "tv", "computer", "tablet"];

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchCategory = activeCategory === "all" || product.category === activeCategory;
    const matchSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="p-6">
      <motion.h2
        className="mb-6 text-3xl font-bold text-center text-gray-800"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Shop Our Products
      </motion.h2>

      {/* Search bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full max-w-md px-4 py-2 text-sm border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full border text-sm capitalize transition duration-200 ${
              activeCategory === cat
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No products found.</p>
      )}
    </div>
  );
}
