"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import VideoPlayer from "./VideoPlayer";

interface VideoContent {
  id: string;
  url: string;
  title: string;
  description: string;
}

const VideoList = () => {
  const videoContents: VideoContent[] = [
    {
      id: "1",
      url: "/assets/video1.mp4",
      title: "Video 1 Title",
      description: "Video 1 Description",
    },
    {
      id: "2",
      url: "/assets/video2.mp4",
      title: "Video 2 Title",
      description: "Video 2 Description",
    },
    {
      id: "3",
      url: "/assets/video3.mp4",
      title: "Video 3 Title",
      description: "Video 3 Description",
    },
    // Add more video objects as needed
  ];

  const [visibleVideos, setVisibleVideos] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(
            (entry.target as HTMLElement).dataset.index || ""
          );
          if (entry.isIntersecting) {
            setVisibleVideos((prev) => [...prev, index]);
          } else {
            setVisibleVideos((prev) => prev.filter((i) => i !== index));
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.5 }
    );

    const videoElements =
      containerRef.current?.querySelectorAll("div[data-index]");
    videoElements?.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className="grid grid-cols-1 gap-8 h-screen overflow-y-auto p-4"
      ref={containerRef}
    >
      {videoContents.map((content, index) => (
        <Link key={index} href={`/video/${index}`}>
          <div
            className={`bg-white rounded-lg shadow-md overflow-hidden`}
            data-index={index}
          >
            <div className="aspect-video">
              {visibleVideos.includes(index) && (
                <VideoPlayer src={content.url} id={content.id} />
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default VideoList;
