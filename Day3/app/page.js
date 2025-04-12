"use client";

import React from "react";
import { useRouter } from "next/navigation"; // Import useRouter

export default function Profile() {
    const router = useRouter(); // Initialize router

    const users = [
        {
            id: 1,
            name: "Mr Meow Meow",
            email: "Meowstation@gmail.com",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF0iwZtvJuTWe1YPpujX91hvMR_sC9YlSuQw&s"
        },
        {
            id: 2,
            name: "Miss Purrington",
            email: "purrfect@example.com",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6yPZZXvRBPP9z-hrBgJNDnmUhh9ud9QzLgA&s"
        },
        {
            id: 3,
            name: "Captain Whiskers",
            email: "whiskers@feline.com",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP47FxC-XjLqV33QxCyS7GmMLoZ6G8DEJbaA&s"
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-blue-200 w-full items-center justify-center p-8">
            <h1 className="text-3xl font-bold mb-6">User Profiles</h1>

            {/* Grid layout for user cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {users.map((user) => (
                    <div 
                        key={user.id} 
                        className="bg-white w-[300px] rounded-lg shadow-lg flex flex-col items-center p-6"
                    >
                        <img 
                            src={user.avatar} 
                            alt="Profile Avatar"
                            className="w-32 h-32 rounded-full border-4 border-blue-500 mb-4"
                        />
                        <h1 className="text-2xl font-bold mb-2">{user.name}</h1>
                        <p className="text-gray-600 mb-4">{user.email}</p>
                        
                        <button 
                            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition mb-2"
                            onClick={() => router.push(`/details/${user.id}`)} // Navigate to user-specific details page
                        >
                            View details
                        </button>
                        
                        <button className="w-full bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition">
                            Logout
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
