// import { useEffect, useRef, useState } from "react";
// import { useToggle } from "react-use";

// export default function MotoLandingControlV3({
//   landingIndex,
//   landingIndexAction,
//   total,
//   playInterval = 20000,
//   setIsScrolling,
// }: any) {
//   const [isPlaying, setIsPlaying] = useToggle(true);
//   const [scrollToBottom, setScrollToBottom] = useToggle(true);

//   const intervalRef: any = useRef();

//   // console.log("🚀 ~ intervalRef:", intervalRef.current);

//   const [progress, setProgress] = useState(0); // State to hold the progress
//   console.log("🚀 ~ progress:", progress);

//   // useEffect(() => {
//   //   const interval = setInterval(() => {
//   //     // Update progress
//   //     setProgress((prevProgress) => {
//   //       const newProgress = prevProgress + 1;
//   //       return newProgress <= 100 ? newProgress : 100;
//   //     });
//   //   }, 100); // Interval time in milliseconds

//   //   return () => clearInterval(interval);
//   // }, []);

//   useEffect(() => {
//     if (isPlaying) {
//       // Clear the interval
//       clearInterval(intervalRef.current);

//       // Start a new interval with the updated delay
//       intervalRef.current = setInterval(() => {
//         if (isPlaying) {
//           if (scrollToBottom) {
//             landingIndexAction.inc(1);
//             if (total === landingIndex) setScrollToBottom(!scrollToBottom);
//           } else {
//             landingIndexAction.dec(1);
//             if (0 === landingIndex) setScrollToBottom(!scrollToBottom);
//           }
//         }
//       }, playInterval);
//     }

//     // Clear the interval when component unmounts or when isPlaying becomes false
//     return () => clearInterval(intervalRef.current);
//   }, [landingIndex, isPlaying, playInterval, scrollToBottom, total]);

//   /* ------------- Тухайн Component рүү үсрэх ------------- */
//   useEffect(() => {
//     const handleScrollEnd = () => {
//       setIsScrolling(false);
//       window.removeEventListener("scroll", handleScrollEnd);
//     };

//     setIsScrolling(true);
//     const element = document.querySelector(`#landing${landingIndex}`);
//     element?.scrollIntoView({ block: "center", behavior: "smooth" });

//     window.addEventListener("scroll", handleScrollEnd);

//     setProgress(0);

//     return () => {
//       window.removeEventListener("scroll", handleScrollEnd);
//     };
//   }, [landingIndex]);

//   const iconClassName =
//     "text-white block text-3xl hover:scale-105 hover:animate-ping animate-duration-3s cursor-pointer";

//   return (
//     <div
//       // className="bg-black z-50 fixed left-4 bottom-5 rounded-2xl bg-opacity-40 px-3 py-5 w-16"
//       className="bg-black z-50 fixed left-4 bottom-5 rounded-2xl bg-opacity-40 px-3 py-5 w-32"
//     >
//       <div className="flex flex-col gap-5 items-center justify-between h-full w-full">
//         <div
//           className="progress-bar h-12 bg-green-500 fixed z-[55] bottom-0 left-0"
//           style={{ width: `${progress}%` }}
//         ></div>
//       </div>
//     </div>
//   );
// }
