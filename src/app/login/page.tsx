"use client";
import LoginForm from "./../../../components/LoginForm";
import Options from "./../../../components/Options.client";
import LeftSection from "./../../../components/LeftSection";
import { UserAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Login = () => {
  const { user, googleSignIn } = UserAuth();
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleSignIn = async () => {
    try {
      await googleSignIn();
      router.push("/video/1");
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 mx-auto gap-10">
      <LeftSection />
      <div className="flex-col items-center">
        <div
          onClick={handleSignIn}
          className="mb-4 flex justify-center items-center p-2 bg-slate-800 text-white rounded-full cursor-pointer"
        >
          Continue as google
        </div>

        <LoginForm />
        <Options />
      </div>
    </div>
  );
};

export default Login;
