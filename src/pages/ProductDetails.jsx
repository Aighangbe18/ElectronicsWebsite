import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";

const products = [
  { id: 1, name: "African Print Dress", price: 49.99, image: "/images/bluetooth.avif", description: "Beautifully patterned African dress perfect for all occasions." },
  { id: 2, name: "Handmade Beaded Necklace", price: 29.99, image: "/images/earpod.avif", description: "Traditional African necklace made with love." },
  { id: 3, name: "Leather Sandals", price: 39.99, image: "/images/headphonesbalo.avif", description: "Comfortable and stylish handmade leather sandals." },
  { id: 4, name: "Kente Fabric", price: 24.99, image: "/images/headset.avif", description: "Vibrant Kente fabric for sewing and decoration." },
  { id: 5, name: "African Print Dress", price: 49.99, image: "/images/laptop.avif", description: "Beautifully patterned African dress perfect for all occasions." },
  { id: 6, name: "Handmade Beaded Necklace", price: 29.99, image: "/images/lightsmartphone.avif", description: "Traditional African necklace made with love." },
  { id: 7, name: "Leather Sandals", price: 39.99, image: "/images/smartphone.avif", description: "Comfortable and stylish handmade leather sandals." },
  { id: 8, name: "Kente Fabric", price: 24.99, image: "/images/speaker.avif", description: "Vibrant Kente fabric for sewing and decoration." },
  { id: 9, name: "African Print Dress", price: 49.99, image: "/images/tablet.avif", description: "Beautifully patterned African dress perfect for all occasions." },
  { id: 10, name: "Handmade Beaded Necklace", price: 29.99, image: "/images/tv.avif", description: "Traditional African necklace made with love." },
  { id: 11, name: "Leather Sandals", price: 39.99, image: "/images/wristwatch.avif", description: "Comfortable and stylish handmade leather sandals." },
  { id: 12, name: "Kente Fabric", price: 24.99, image: "/images/product4.jpg", description: "Vibrant Kente fabric for sewing and decoration." },
];

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));

  const handleAddToCart = () => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

    const exists = storedCart.find((item) => item.id === product.id);
    let updatedCart;

    if (exists) {
      updatedCart = storedCart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedCart = [...storedCart, { ...product, quantity: 1 }];
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert("🛒 Added to cart!");
  };

  if (!product) {
    return (
      <div className="p-6 font-semibold text-center text-red-600">
        Product not found
      </div>
    );
  }

  return (
    <motion.div
      className="grid max-w-5xl grid-cols-1 gap-10 p-6 mx-auto md:grid-cols-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <img
        src={product.image}
        alt={product.name}
        className="object-cover w-full rounded-lg shadow h-80"
      />
      <div>
        <h1 className="mb-3 text-3xl font-bold text-gray-800">{product.name}</h1>
        <p className="mb-4 text-xl font-semibold text-blue-600">${product.price}</p>
        <p className="mb-6 leading-relaxed text-gray-700">{product.description}</p>
        <button
          onClick={handleAddToCart}
          className="px-6 py-3 text-white transition bg-blue-600 rounded hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
}
