"use client";

import React from "react";

export default function Profile() {
    const user = {
        name: "Jane Coleman",
        email: "janecoleman@gmail.com",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF0iwZtvJuTWe1YPpujX91hvMR_sC9YlSuQw&s" // Sample profile image
    };

    return (
        <div className="flex flex-col min-h-screen bg-blue-200 w-full items-center justify-center">
            <div className="bg-white w-[400px] rounded-lg shadow-lg flex flex-col items-center p-6">
                <img 
                    src={user.avatar} 
                    alt="Profile Avatar"
                    className="w-32 h-32 rounded-full border-4 border-blue-500 mb-4"
                />
                <h1 className="text-2xl font-bold mb-2">{user.name}</h1>
                <p className="text-gray-600 mb-4">{user.email}</p>
                
                <button className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition mb-2">
                    Edit Profile
                </button>
                
                <button className="w-full bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition">
                    Logout
                </button>
            </div>
        </div>
    );
}
