"use client";
import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';

const firebaseConfig = {
  apiKey: "AIzaSyApQRyGVS7FnbZdPY_5Do206QJ79ir7VA0",
  authDomain: "lingualink-79fad.firebaseapp.com",
  projectId: "lingualink-79fad",
  storageBucket: "lingualink-79fad.appspot.com",
  messagingSenderId: "300330680210",
  appId: "1:300330680210:web:4b50e23be7da406a1f0b4b"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const VideoUploadPage: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);
  const [uploadedVideoURL, setUploadedVideoURL] = useState<string | null>(null);

  const handleVideoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedVideo(event.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (selectedVideo) {
      const videoUUID = uuidv4(); 
      const videoRef = ref(storage, `videos/${videoUUID}`);
      const uploadTask = uploadBytesResumable(videoRef, selectedVideo);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);
        },
        (error) => {
          console.error('Error uploading video:', error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setUploadedVideoURL(downloadURL);
            setSelectedVideo(null);
            setUploadProgress(null);
          });
        }
      );
    } else {
      console.log('Please select a video before uploading.');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h2>Video Upload Page</h2>
      <input type="file" accept="video/*" onChange={handleVideoChange} style={{ marginBottom: '10px' }} />
      <button 
        onClick={handleUpload} 
        disabled={!selectedVideo} 
        style={{ 
          borderRadius: '50%', 
          width: '100px', 
          height: '100px', 
          backgroundColor: 'emerald', 
          color: 'white', 
          border: 'none', 
          cursor: 'pointer',
          fontSize: '1.5rem' 
        }}
      >
        Upload
      </button>
      {selectedVideo && <p>Selected Video: {selectedVideo.name}</p>}
      {uploadProgress !== null && <progress value={uploadProgress} max="100" />}
      {uploadedVideoURL && (
        <div>
          <p>Video uploaded successfully!</p>
          <p>Video URL: {uploadedVideoURL}</p>
        </div>
      )}
    </div>
  );
};

export default VideoUploadPage;


