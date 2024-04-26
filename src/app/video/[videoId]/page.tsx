"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import VideoPlayer from "../../../../components/VideoPlayer";
import { UserAuth } from "../../context/AuthContext";
import videos from "@/utils/videos.json";

const VideoPage = ({ params }: { params: { videoId: string } }) => {
  const { user, logOut } = UserAuth();
  const router = useRouter();
  const [loadingNextVideo, setLoadingNextVideo] = useState(false);
  const threshold = 500;

  // const handleScroll = debounce(() => {
  //   const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  //   if (
  //     scrollTop + clientHeight >= scrollHeight - threshold &&
  //     !loadingNextVideo
  //   ) {
  //     loadNextVideo();
  //   }
  //   console.log("🚀 ~ handleScroll ~ handleScroll:", scrollTop)
  // }, 200);

  // const loadNextVideo = () => {
  //   setLoadingNextVideo(true);
  //   const newVideoId = parseInt(params.videoId) + 1;
  //   router.replace(`/video/${newVideoId}`, undefined);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [params.videoId]);

  useEffect(() => {
    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === "ArrowUp" && !loadingNextVideo) {
        loadNextVideo(-1);
      } else if (event.key === "ArrowDown" && !loadingNextVideo) {
        loadNextVideo(1);
      }
    };

    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [params.videoId, loadingNextVideo]);

  const loadNextVideo = (increment: number) => {
    setLoadingNextVideo(true);
    const nextVideoId = parseInt(params.videoId) + increment;
    if (nextVideoId > 0 && nextVideoId <= videos.length) {
      router.replace(`/video/${nextVideoId}`, undefined);
    } else {
      setLoadingNextVideo(false); // Reset loading state if not navigating
    }
  };
  

  const handleLogOut = async () => {
    try {
      await logOut();
      console.log(user);
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-screen-scroll-y">
      <div
        onClick={handleLogOut}
        className="p-2 bg-red-400 cursor-pointer text-center"
      >
        Log out
      </div>
      {user ? (
        <VideoPlayer
          src={`/assets/video${params.videoId}.mp4`}
          id={params.videoId}
        />
      ) : (
        "Please login"
      )}
    </div>
  );
};

export default VideoPage;
