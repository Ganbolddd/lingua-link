"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import VideoPlayer from "../../../../components/VideoPlayer";
import { UserAuth } from "../../context/AuthContext";
// import videos from "@/utils/videos.json";
import { getDownloadURL, getStorage, ref } from "firebase/storage";

const VideoPage = ({ params }: { params: { videoId: string } }) => {
  const { user, logOut } = UserAuth();
  const router = useRouter();
  const [loadingNextVideo, setLoadingNextVideo] = useState(false);
  const threshold = 500;
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideosFromFirebase = async () => {
      try {
        const storage = getStorage();
        const videosRef = ref(storage, "videos/"); // Replace with the actual path to your videos folder
        const urls = await Promise.all(
          [...Array(3)].map(async (_, index) => {
            const videoRef = ref(storage, `videos/video${index + 1}.mp4`); // Replace with the actual file paths
            const url = await getDownloadURL(videoRef);
            return { id: `${index + 1}`, src: url };
          })
        );
        setVideos(urls);
      } catch (error) {
        console.error("Error fetching video URLs:", error);
      }
    };

    fetchVideosFromFirebase();
  }, []);
  //   let lastScrollPosition = 0; // Variable to store the last scroll position

  // const handleScroll = () => {
  //   const scrollPosition = window.scrollY;
  //   const scrollDirection = scrollPosition > lastScrollPosition ? 1 : -1;
  //   lastScrollPosition = scrollPosition;

  //   if (scrollDirection === 1 && !loadingNextVideo) {
  //     loadNextVideo(1); // Increment
  //   } else if (scrollDirection === -1 && !loadingNextVideo) {
  //     loadNextVideo(-1); // Decrement
  //   }
  // };

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

  // useEffect(() => {
  //   // Add scroll event listener to window
  //   const scrollListener = () => {
  //     handleScroll();
  //   };
  //   window.addEventListener('scroll', scrollListener);

  //   // Remove event listener when component unmounts
  //   return () => {
  //     window.removeEventListener('scroll', scrollListener);
  //   };
  // }, []);

  // const loadNextVideo = (increment: number) => {
  //   setLoadingNextVideo(true);
  //   const nextVideoId = parseInt(params.videoId) + increment;
  //   if (nextVideoId > 0 && nextVideoId <= videos.length) {
  //     router.replace(`/video/${nextVideoId}`, undefined);
  //   } else {
  //     setLoadingNextVideo(false); // Reset loading state if not navigating
  //   }
  // };

  const loadNextVideo = (increment) => {
    setLoadingNextVideo(true);
    const currentIndex = videos.findIndex(
      (video) => video.id === params.videoId
    );
    const nextIndex = currentIndex + increment;
    if (nextIndex >= 0 && nextIndex < videos.length) {
      router.replace(`/video/${videos[nextIndex].id}`, undefined);
    } else {
      setLoadingNextVideo(false);
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
          // src={`/assets/video${params.videoId}.mp4`}
          // id={params.videoId}
          src={videos.find((video) => video.id === params.videoId)?.src || ""}
          id={params.videoId}
        />
      ) : (
        "Please login"
      )}
    </div>
  );
};

export default VideoPage;
