"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function Details() {
    const router = useRouter();

    const user = {
        name: "Mr meow meow",
        email: "Meowstation@gmail.com",
        phone: "+123 456 7890",
        degree: "Master of Meowgineering",
        bio: "A mysterious cat exploring the digital world.",
        location: "Meowland",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF0iwZtvJuTWe1YPpujX91hvMR_sC9YlSuQw&s"
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-100 w-full items-center justify-center">
            <div className="bg-white w-[400px] rounded-lg shadow-lg flex flex-col items-center p-6">
                <img 
                    src={user.avatar} 
                    alt="Profile Avatar"
                    className="w-32 h-32 rounded-full border-4 border-blue-500 mb-4"
                />
                <h1 className="text-2xl font-bold mb-2">{user.name}</h1>
                <p className="text-gray-600"><strong>Email:</strong> {user.email}</p>
                <p className="text-gray-600"><strong>Phone:</strong> {user.phone}</p>
                <p className="text-gray-600"><strong>Degree:</strong> {user.degree}</p>
                <p className="text-gray-600 mt-2">{user.bio}</p>
                <p className="text-gray-600 mt-1"><strong>Location:</strong> {user.location}</p>

                <button 
                    className="mt-4 w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
                    onClick={() => router.push("/")}
                >
                    Back to Profile
                </button>
            </div>
        </div>
    );
}
