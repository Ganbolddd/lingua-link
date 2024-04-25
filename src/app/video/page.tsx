'use client';
import React, { useEffect, useState } from 'react';
import VideoList from '@/components/VideoList';
const VideoPage: React.FC = () => {

  const [scrollPosition, setScrollPosition] = useState(0);
  let id = 1;

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    // Add scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove scroll event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
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
    <div className='w-full h-screen'>
      <h1>Video Player Example</h1>
      <VideoList/>
    </div>
  );
};

export default VideoPage;