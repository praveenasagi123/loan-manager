"use client";




// import { apiClient } from "@/lib/api-client";
import Login from "./login/page";




export default function Home() {
  

 

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Loan Management</h1>
      <Login />
      {/* < Homepage  /> */}
      {/* <VideoFeed videos={videos} /> */}
      {/* <VideoFeed  /> */}

    </main>
  );
}
