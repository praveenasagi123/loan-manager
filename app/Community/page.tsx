"use client";

import { useEffect, useState } from "react";
import VideoFeed from "../components/VideoFeed";
import { apiClient } from "@/lib/api-client";
import { IVideo } from "@/models/Video";

export default function Community()  {
   const [videos, setVideos] = useState<IVideo[]>([]);
  
    useEffect(() => {
      const fetchVideos = async () => {
        try {
          const data = await apiClient.getVideos();
          setVideos(data);
        } catch (error) {
          console.error("Error fetching videos:", error);
        }
      };
  
      fetchVideos();
    }, []);
  
  return (
     <div className="container mx-auto px-4 py-8 bg-gray-600">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 flex items-center justify-center ">COMMUNITY</h1>
            <VideoFeed videos={videos} />
          </div>
        </div>
  )
}


