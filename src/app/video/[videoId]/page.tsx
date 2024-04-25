"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import VideoPlayer from "../../../../components/VideoPlayer";
import { debounce } from "lodash"; // Import debounce from lodash

const VideoPage = ({ params }: { params: { videoId: string } }) => {
  const router = useRouter();
  const [loadingNextVideo, setLoadingNextVideo] = useState(false); // State to prevent multiple requests while loading next video
  const threshold = 500; // Threshold for triggering next video (in pixels)

  const handleScroll = debounce(() => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - threshold && !loadingNextVideo) {
      loadNextVideo();
    }
  }, 200); // Debounce scroll event to improve performance

  const loadNextVideo = () => {
    setLoadingNextVideo(true);
    const newVideoId = parseInt(params.videoId) + 1;
    router.replace(`/video/${newVideoId}`, undefined);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [params.videoId]);

  return (
    <div className="w-full h-screen">
      <VideoPlayer src={`/assets/video${params.videoId}.mp4`} id={params.videoId} />
    </div>
  );
};

export default VideoPage;