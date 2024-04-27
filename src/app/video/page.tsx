'use client';
import React, { useEffect, useState } from 'react';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';
import VideoPlayer from '@/components/VideoPlayer';

const VideoPage: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [videoUrl, setVideoUrl] = useState<string | null>(null); // Initialize videoUrl as null

  useEffect(() => {
    const fetchVideoUrl = async () => {
      try {
        const storage = getStorage();
        const videoRef = ref(storage, 'gs://lingualink-79fad.appspot.com/videos/video2.mp4');
        const url = await getDownloadURL(videoRef);
        setVideoUrl(url);
      } catch (error) {
        console.error('Error fetching video URL:', error);
      }
    };

    fetchVideoUrl();
  }, []);
  

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true)
  }, []);

  return (
    <div className='w-full h-screen'>
      <h1>Video Player Example</h1>
      {/* Conditional rendering of VideoPlayer */}
      {isClient && videoUrl ? (
        <VideoPlayer src={videoUrl} id={''}/>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default VideoPage;
