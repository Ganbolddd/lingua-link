"use client";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import React, { useState } from "react";

async function addDataToFireStore({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  try {
    const docRef = await addDoc(collection(db, "messages"), {
      name: name,
      email: email,
      message: message,
    });
    console.log("Document written with ID: ", docRef.id);
    return true;
  } catch (e) {
    console.error("Error adding document: ", e);
    return false;
  }
}

export default function Upload() {
  return <>Drag and drop file here</>;
}
