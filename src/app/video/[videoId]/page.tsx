"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import VideoPlayer from "../../../../components/VideoPlayer";
import { UserAuth } from "../../context/AuthContext";
import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";

interface Video {
  id: string;
  src: string;
}

const VideoPage = ({ params }: { params: { videoId: string } }) => {
  const { user, logOut } = UserAuth();
  // console.log("🚀 ~ VideoPage ~ user:", user);
  const router = useRouter();
  const [loadingNextVideo, setLoadingNextVideo] = useState(false);
  const [videos, setVideos] = useState<Video[]>([]);
  console.log("🚀 ~ VideoPage ~ videos:", videos);
  const currentVideo = videos.find((video) => video.id === params.videoId);
  const [currentVideoId, setCurrentVideoId] = useState<string>('');
  // console.log("Current Video:", currentVideo);
  // console.log("Current Video Source:", currentVideo?.src);

  useEffect(() => {
    const fetchVideosFromFirebase = async () => {
      try {
        const storage = getStorage();
        const videosRef = ref(
          storage,
          "gs://lingualink-79fad.appspot.com/videos/"
        );
        const listResult = await listAll(videosRef);
        // console.log("🚀 ~ fetchVideosFromFirebase ~ listResult:", listResult.items.length)
        // const videoFiles = listResult.items.filter((item) => item.kind === 'file');
        const urls = await Promise.all(
          [...Array(listResult.items.length)].map(async (_, index) => {
            const videoRef = ref(
              storage,
              `gs://lingualink-79fad.appspot.com/videos/video${index + 1}.mp4`
            );
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
    const currentIndex = videos.findIndex(
      (video) => video.id === params.videoId
    );
    const nextIndex = currentIndex + increment;
    if (nextIndex >= 0 && nextIndex < videos.length) {
      const nextVideoId = videos[nextIndex].id;
      router.replace(`/video/${nextVideoId}`, undefined, {shallow: true});
      console.log("🚀 ~ loadNextVideo ~ {videos[nextIndex].id:", videos[nextIndex].id);
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
      {user && currentVideo?.src ? (
        <VideoPlayer
          src={currentVideo?.src}
          id={currentVideoId}
        />
      ) : (
        "Loading"
      )}
    </div>
  );
};

export default VideoPage;
