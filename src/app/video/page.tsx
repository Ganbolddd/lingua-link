"use client";
import React, { useEffect, useState } from "react";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import VideoPlayer from "@/components/VideoPlayer";
const VideoPage: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [videoUrl, setVideoUrl] = useState("");

  let id = 1;
  useEffect(() => {
    const fetchVideoUrl = async () => {
      try {
        const storage = getStorage();
        const videoRefere = ref(
          storage,
          "https://console.firebase.google.com/project/lingualink-79fad/storage/lingualink-79fad.appspot.com/files"
        );
        const url = await getDownloadURL(videoRefere);
        console.log("🚀 ~ fetchVideoUrl ~ url:", url);
        setVideoUrl(url);
      } catch (error) {
        console.error("Error fetching video URL:", error);
      }
    };

    fetchVideoUrl();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    // Add scroll event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove scroll event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this effect runs only once on mount

  // Define a threshold scroll position for routing
  const threshold = 500; // Adjust this value as needed

  // Check if scroll position exceeds threshold and route accordingly
  useEffect(() => {
    if (scrollPosition > threshold) {
      // id++;
      // Replace with your desired routing logic
      window.location.href = `{/video/${id}}`; // This will navigate to '/destination'
    }
  }, [scrollPosition]); // This effect runs whenever scrollPosition changes

  return (
    <div className="w-full h-screen">
      <h1>Video Player Example</h1>
      {videoUrl} ? <VideoPlayer src={videoUrl} id={""} /> :{" "}
      <div>Loading...</div>
    </div>
  );
};

export default VideoPage;
