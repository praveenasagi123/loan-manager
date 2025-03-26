// Homepage.tsx
"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; 
import { Upload } from 'lucide-react';
import Community from '../Community/page';
import { useState } from 'react';
import {  
  Users, 
  Rocket, 
  Palette, 
  Shield, 
  Smartphone,
  Menu,
  X
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";


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
      <nav className="bg-gray-600 p-4 text-white flex justify-between items-center">
        <Link href="/" className="text-xl bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text font-bold">
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

       {/* Hero Section */}
       <section className="container px-4 py-24 md:py-32">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-4 max-w-[64rem]">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Welcome to the Future of{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                Digital Experience
              </span>
            </h1>
            <p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Experience a streamlined and intuitive interface designed for your everyday needs.
              Built with modern technology for the modern web.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg">Get Started</Button>
            <Button size="lg" variant="outline">Learn More</Button>
          </div>
        </div>
      </section>


      <section className="container px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="transition-all duration-300 hover:shadow-lg">
            <CardContent className="pt-6">
              <div className="rounded-lg p-3 bg-primary/10 w-fit">
                <Rocket className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mt-4">Fast Performance</h3>
              <p className="text-muted-foreground mt-2">
                Lightning-fast load times and seamless interactions for the best user experience.
              </p>
            </CardContent>
          </Card>

          <Card className="transition-all duration-300 hover:shadow-lg">
            <CardContent className="pt-6">
              <div className="rounded-lg p-3 bg-primary/10 w-fit">
                <Palette className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mt-4">Beautiful Design</h3>
              <p className="text-muted-foreground mt-2">
                Clean, modern interface that's both functional and visually appealing.
              </p>
            </CardContent>
          </Card>

          <Card className="transition-all duration-300 hover:shadow-lg">
            <CardContent className="pt-6">
              <div className="rounded-lg p-3 bg-primary/10 w-fit">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mt-4">Secure & Private</h3>
              <p className="text-muted-foreground mt-2">
                Your data is protected with the latest security measures and encryption.
              </p>
            </CardContent>
          </Card>

          <Card className="transition-all duration-300 hover:shadow-lg">
            <CardContent className="pt-6">
              <div className="rounded-lg p-3 bg-primary/10 w-fit">
                <Smartphone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mt-4">Responsive Layout</h3>
              <p className="text-muted-foreground mt-2">
                Works flawlessly across all devices, from desktops to smartphones.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Homepage;