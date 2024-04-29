import React, { useEffect, useRef, useState } from "react";
import VideoPlayerControls from "./VideoPlayerControls";
// import videosData from "../utils/videos.json"; // Import video data

//"^14.1.0"

interface VideoPlayerProps {
  id: string;
  src: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ id, src }) => {
  console.log("🚀 ~ src:", src)
  // const [videoData, setVideoData] = useState<{ src: string } | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoDuration, setVideoDuration] = useState<number>();
  const [videoProgress, setVideoProgress] = useState<number>(0);

  // useEffect(() => {
  //   // Fetch video data based on ID
  //   const video = videosData.find((video) => video.id === id);
  //   if (video) {
  //     setVideoData(video);
  //   }
  // }, [id]);

  // useEffect(() => {
  //   const video = videoRef.current;
  //   if (video) {
  //     setVideoDuration(video.duration);
  //   }
  // }, [videoData]); // Trigger effect when videoData changes

  useEffect(() => {
    if (isPaused) return;
    const currentTime = videoRef.current?.currentTime;
    if (videoDuration != null && currentTime != null) {
      let loadingTimeout = setTimeout(() => {
        if (videoProgress == currentTime / videoDuration) {
          setVideoProgress((prev) => prev + 0.000001);
        } else {
          setVideoProgress(currentTime / videoDuration);
        }
      }, 10);

      return () => {
        clearTimeout(loadingTimeout);
      };
    }
  }, [videoProgress, videoDuration, isPaused]);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video) {
      setIsPaused(!video.paused);
      video.paused ? video.play() : video.pause();
    }
  };

  return (
    <main>
      <div className="relative w-[90%] max-w-6xl mx-auto my-8 rounded-xl overflow-hidden">
        <div className="absolute top-4 right-4">
          <VideoPlayerControls
            progress={videoProgress}
            isPaused={isPaused}
            onPlayPause={togglePlayPause}
            size={undefined}
            width={undefined}
          />
        </div>
        <video
          className="w-full"
          ref={videoRef}
          onClick={togglePlayPause}
          loop
          muted
          autoPlay
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </main>
  );
};

export default VideoPlayer;
