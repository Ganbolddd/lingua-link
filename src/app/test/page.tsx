// import { useState } from "react";
// import firebase from "firebase/app";
// import { UserAuth } from "@/src/app/context/AuthContext";

// // Initialize Firebase
// const firebaseConfig = {
//   // Your Firebase project configuration
// };

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

// export default function LoginForm() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignUp = async (e) => {
//     e.preventDefault();
//     try {
//       await firebase.auth().createUserWithEmailAndPassword(email, password);
//       // Sign up successful, you can redirect the user or do something else here
//       console.log("Sign up successful");
//     } catch (error) {
//       console.error("Sign up failed", error.message);
//       // Handle sign up error, show error message to the user
//     }
//   };

//   const handleSignIn = async (e) => {
//     e.preventDefault();
//     try {
//       await firebase.auth().signInWithEmailAndPassword(email, password);
//       // Sign in successful, you can redirect the user or do something else here
//       console.log("Sign in successful");
//     } catch (error) {
//       console.error("Sign in failed", error.message);
//       // Handle sign in error, show error message to the user
//     }
//   };

//   return (
//     <div className="w-full max-w-md">
//       <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//         {/* Email input */}
//         <input
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           id="email"
//           type="text"
//           name="email"
//           placeholder="Enter your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         {/* Password input */}
//         <input
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           id="password"
//           type="password"
//           name="password"
//           placeholder="Enter your password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         {/* Sign up button */}
//         <button
//           className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           type="submit"
//           onClick={handleSignUp}
//         >
//           Sign Up
//         </button>
//         {/* Sign in button */}
//         <button
//           className="w-full mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           type="submit"
//           onClick={handleSignIn}
//         >
//           Sign In
//         </button>
//       </form>
//     </div>
//   );
// }