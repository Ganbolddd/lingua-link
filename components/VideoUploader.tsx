// import React, { useState } from "react";
// import firebase from "firebase/app";
// import "firebase/storage";

// const VideoUploader = () => {
//   const [videoFile, setVideoFile] = useState(null);
//   const [uploadProgress, setUploadProgress] = useState(0);

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     setVideoFile(file);
//   };

//   const handleUpload = () => {
//     if (videoFile) {
//       const storageRef = firebase.storage().ref();
//       const videoRef = storageRef.child(videoFile.name);
//       const uploadTask = videoRef.put(videoFile);

//       uploadTask.on(
//         "state_changed",
//         (snapshot) => {
//           // Get upload progress
//           const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//           setUploadProgress(progress);
//         },
//         (error) => {
//           // Handle errors
//           console.error("Error uploading video:", error);
//         },
//         () => {
//           // Upload completed successfully
//           console.log("Video uploaded successfully!");
//         }
//       );
//     }
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleFileChange} accept="video/*" />
//       <button onClick={handleUpload}>Upload Video</button>
//       {uploadProgress > 0 && <div>Upload Progress: {uploadProgress}%</div>}
//     </div>
//   );
// };

// export default VideoUploader;
