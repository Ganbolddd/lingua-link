import React from "react";

const Login = () => {
  
  return (
    <div className="relative flex flex-col items-center justify-center h-screen">
      <div className="absolute top-[25px] left-[50px] font-bold text-5xl drop-shadow-2xl text-green-600">LinguaLink</div>
        <div className="box-border h-32 w-32 p-4 border-0 absolute right-[50px] absolute top-[0px]">
        </div>
      <div className="box-border h-[600px] w-[1300px] bg-gray-600 opacity-10 rounded-tl-[35px] absolute bottom-[0px] right-[0px]
      shadow-inner "></div>
      <div className="grid grid-cols-5 gap-[60px] absolute top-[30px] right-[100px] cursor-pointer font-arial ">
        <h1>Home</h1>
        <h1>Profile</h1>
        <h1>Upload</h1>
        <h1>Support</h1>
        <h1>Settings</h1>   
      </div>
    </div>
  

  
  );
};

export default Login;
