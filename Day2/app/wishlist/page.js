"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const fetchWishlist = () => {
      const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
      setWishlistItems(storedWishlist);
    };

    fetchWishlist();
    window.addEventListener("storage", fetchWishlist);
    return () => {
      window.removeEventListener("storage", fetchWishlist);
    };
  }, []);

  const removeFromWishlist = (productId) => {
    const updatedWishlist = wishlistItems.filter((item) => item.id !== productId);
    setWishlistItems(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Your Wishlist ❤️</h1>
      {wishlistItems.length === 0 ? (
        <p className="text-gray-600">Your wishlist is empty.</p>
      ) : (
        <div className="grid gap-4">
          {wishlistItems.map((item) => (
            <div key={item.id} className="flex items-center bg-white p-4 rounded-lg shadow-md">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-contain rounded-md" />
              <div className="ml-4 flex-1">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-blue-600 font-bold">{item.price}</p>
              </div>
              <button
                onClick={() => removeFromWishlist(item.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
              >
                Remove ❌
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
