// Homepage.tsx
"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; 
import { Upload } from 'lucide-react';
import Community from '../Community/page';


const Homepage = () => {
  const router = useRouter(); // Initialize router

  const handleUploadClick = () => {
    router.push('/upload'); // Navigate to upload
  };
  const handlePostClick = () => {
    router.push('/Community'); // Navigate to upload
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Reelspro
        </Link>
        <div className="flex space-x-4">
          <button onClick={handleUploadClick} className="hover:text-gray-300">
            Upload
          </button>
          <button onClick={handlePostClick} className="hover:text-gray-300">
            Community
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-sans p-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 text-shadow-lg">
          Welcome to Modern Home
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl leading-relaxed">
          Experience a streamlined and intuitive interface designed for your everyday needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl w-full">
          <div className="bg-white bg-opacity-10 rounded-lg p-8 transition-transform transform hover:translate-y-[-5px] hover:shadow-lg cursor-pointer">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-semibold mb-2">Fast Performance</h3>
            <p className="text-base leading-relaxed">
              Enjoy lightning-fast load times and seamless interactions.
            </p>
          </div>

          <div className="bg-white bg-opacity-10 rounded-lg p-8 transition-transform transform hover:translate-y-[-5px] hover:shadow-lg cursor-pointer">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-2xl font-semibold mb-2">Beautiful Design</h3>
            <p className="text-base leading-relaxed">
              A clean, modern interface that's both functional and visually appealing.
            </p>
          </div>

          <div className="bg-white bg-opacity-10 rounded-lg p-8 transition-transform transform hover:shadow-lg cursor-pointer">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-2xl font-semibold mb-2">Secure & Private</h3>
            <p className="text-base leading-relaxed">
              Your data is protected with the latest security measures.
            </p>
          </div>

          <div className="bg-white bg-opacity-10 rounded-lg p-8 transition-transform transform hover:shadow-lg cursor-pointer">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-2xl font-semibold mb-2">Responsive Layout</h3>
            <p className="text-base leading-relaxed">
              Works flawlessly across all devices, from desktops to smartphones.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;