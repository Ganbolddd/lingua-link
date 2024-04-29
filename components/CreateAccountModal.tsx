import React, { useState } from "react";
import { UserAuth } from "@/src/app/context/AuthContext";
import { useRouter } from "next/navigation";

interface Props {
  onClose: () => void;
}

const CreateAccountModal: React.FC<Props> = ({ onClose }) => {
  const { signUpWithEmail } = UserAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      await signUpWithEmail(email, password);
      console.log("🚀 ~ handleSignUp ~ email:", email);
      router.push("/login");
      // Handle successful sign-up
    } catch (err) {
      console.log("🚀 ~ handleSignUp ~ err:", err);
      // Handle sign-up error
    }
  };

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Prevent closing modal when clicking inside the modal content
    e.stopPropagation();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
      <div className="bg-white p-8 rounded-lg w-1/3" onClick={handleModalClick}>
        <h2 className="text-2xl font-bold mb-4">Create Account</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-between gap-5">
          <button
            className="w-full bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
          <button
            className="w-full bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={onClose}
          >
            Close Modal
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountModal;
