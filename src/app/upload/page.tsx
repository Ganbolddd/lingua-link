"use client";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import React, { useState } from "react";

// // async function addDataToFireStore(name, email, message) {
//   try {
//     const docRef = await addDoc(collection(db, "messages"), {
//       name: name,
//       email: email,
//       message: message,
//     });
//     console.log("Document written with ID: ", docRef.id);
//     return true;
//   } catch (e) {
//     console.error("Error adding document: ", e);
//     return false;
//   }
// }

export default function Upload() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

//   const handleSubmit = async ({e}: {e: any}) => {
//     e.preventDefault();
//     const added = await addDataToFireStore(name, email, message);
//     if (added) {
//         setName('')
//         setEmail('');
//         setMessage('');

//         alert ("Data added to firestore")
//     }
//   }

  return <>Drag and drop file here</>;
}
