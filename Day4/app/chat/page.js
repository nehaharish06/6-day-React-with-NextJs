"use client";
import React, { useState } from "react";
import {
  PencilIcon,
  FileIcon,
  ShareIcon,
  AlarmCheck,
  PlusIcon,
  MessageSquareIcon,
} from "lucide-react";

export default function ChatPage() {
  const [conversations, setConversations] = useState([]);
  const [activeConvo, setActiveConvo] = useState(null);
  const [userQue, setUserQue] = useState("");

  async function getAIResponse() {
    const GEMINI_API_URL =
      "https://generativelanguage.googleapis.com/v1beta/models";
    const MODEL_NAME = "gemini-2.0-flash";
    const apiKey = "AIzaSyDXRM1bpLJMdninSRYJzsp902QQGxc1QjM"


    if (!apiKey) {
      alert("API Key is missing. Check your .env.local file.");
      return;
    }

    try {
      const response = await fetch(
        `${GEMINI_API_URL}/${MODEL_NAME}:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `Act as a Japanese Language Translate and translate Japanese to english.
                      1. Generate a small English story.
                      2. Convert it into Japanese.
                      3. Explain it line by line, translating from English to Japanese.
                      Return response strictly as JSON (no markdown).`,
                  },
                ],
              },
            ],
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch AI response");
      }

      const data = await response.json();
      const content = data.candidates?.[0]?.content?.parts?.[0]?.text || "No response received.";

      // Update active conversation state safely
      setActiveConvo((prev) =>
        prev
          ? {
              ...prev,
              messages: [...prev.messages, { role: "assistant", content }],
            }
          : null
      );
    } catch (error) {
      console.error("Error fetching AI response:", error);
      alert("Error fetching AI response");
    }
  }

  return (
    <div className="flex flex-row min-h-screen p-2">
      {/* Sidebar */}
      <div className="flex flex-col w-[250px] p-4 bg-gray-100 shadow-lg">
        <button
          className="flex flex-row items-center justify-center text-white bg-black p-3 rounded-md shadow-lg mb-4"
          onClick={() => {
            const newConvo = {
              id: conversations.length + 1,
              title: `Conversation ${conversations.length + 1}`,
              messages: [],
            };
            setConversations([...conversations, newConvo]);
            setActiveConvo(newConvo);
          }}
        >
          <PlusIcon className="mr-2" />
          <span>New Chat</span>
        </button>

        <hr className="mb-4" />

        {/* List of Conversations */}
        {conversations.map((convo, index) => (
          <div
            key={index}
            onClick={() => setActiveConvo(convo)}
            className={`flex flex-row items-center bg-gray-200 p-3 rounded-md cursor-pointer shadow-md hover:bg-gray-300 ${
              activeConvo?.id === convo.id ? "bg-gray-400 text-white" : ""
            }`}
          >
            <MessageSquareIcon width={24} className="mr-2" />
            <span>{convo.title}</span>
          </div>
        ))}
      </div>

      {/* Chat Section */}
      <div className="w-full flex flex-col min-h-screen">
        {/* Navbar */}
        <nav className="flex flex-row p-4 font-bold text-[24px] items-center justify-between bg-white shadow-md">
          <div className="flex flex-row items-center">
            <h1 className="mr-2">LanBuddy</h1>
            <PencilIcon className="m-2" />
            <FileIcon className="m-2" />
          </div>
          <div className="flex flex-row">
            <ShareIcon className="m-2" />
            <AlarmCheck className="m-2" />
          </div>
        </nav>

        {/* Chat Messages */}
        <div className="flex flex-col flex-grow bg-gray-200 p-4 text-black">
          {activeConvo ? (
            activeConvo.messages.length > 0 ? (
              activeConvo.messages.map((message, i) => (
                <div
                  key={i}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  } mb-2`}
                >
                  <div
                    className={`p-3 rounded-lg shadow ${
                      message.role === "user"
                        ? "bg-blue-500 text-white"
                        : "bg-white text-black"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">Start a conversation...</p>
            )
          ) : (
            <p className="text-center text-gray-500">
              Select a conversation to start chatting.
            </p>
          )}
        </div>

        {/* Input Box */}
        <div className="flex flex-row items-center justify-center p-3 bg-white shadow-md">
          <input
            type="text"
            value={userQue}
            onChange={(e) => setUserQue(e.target.value)}
            placeholder="Type a message..."
            className="w-[800px] h-[50px] border-2 rounded-full px-4 outline-none"
          />
          <button
            className="bg-blue-500 text-white font-bold p-4 rounded-full ml-4 hover:bg-blue-600 transition"
            onClick={() => {
              if (!userQue.trim()) return; // Prevent sending empty messages
              if (!activeConvo) return alert("Start a new conversation first!");

              setActiveConvo((prev) => ({
                ...prev,
                messages: [
                  ...prev.messages,
                  { role: "user", content: userQue },
                ],
              }));

              setUserQue(""); // Clear input after sending message
              getAIResponse();
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}