"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/chat");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-8">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to MyBuddy</h1>
      <p className="text-lg text-gray-700 mt-4">
        Your AI assistant for Japanese learning and art generation
      </p>
      <button
        onClick={handleGetStarted}
        className="mt-6 px-6 py-3 bg-red-600 text-white text-lg font-semibold rounded-full hover:bg-red-700 transition"
      >
        Get Started
      </button>
    </div>
  );
}
