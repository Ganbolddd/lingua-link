import React from "react";

const Login = () => {
  
  return (
    <div className="relative flex flex-col items-center justify-center h-screen">
      <div className="absolute top-[25px] left-[50px] font-bold text-5xl drop-shadow-2xl text-green-600 animate-bounce w-6 h-6">LinguaLink</div>
        <div className="box-border h-32 w-32 p-4 border-0 absolute right-[50px] absolute top-[0px]">
        </div>
      <div className="box-border h-[600px] w-[1300px] bg-gray-600 opacity-10 rounded-tl-[35px] 
      absolute bottom-[0px] right-[0px]
"></div>
      <div className="grid grid-cols-5 gap-[60px] absolute top-[30px] right-[100px] cursor-pointer font-arial ">

          <h1>Home</h1>
          <h1>Profile</h1>
          <h1>Upload</h1>
          <h1>Support</h1>
          <h1>Settings</h1>   

        </div>

      <div className="grid grid-rows-5 grid-flow-col gap-[50px] absolute left-[60px] top-[325px] text-[18px]  ">

        <h1>Videos</h1>
        <h1>About</h1>
        <h1>Accounts</h1>
        <h1>Contact</h1>
        <h1>Sign out</h1>

      </div>
    <div className="box-border h-[100px] w-[100px] bg-green-600 rounded-full absolute top-[150px] left-[75px]">

      
      
    </div>
    <div className="box-border h-[50px] w-[50px] bg-green-600 hover:bg-white  absolute top-[25px] left-[350px] rotate-45  ">
      
    </div>
    <div className="absolute top-[0px] py-6">
  <div className="container mx-auto px-4">
    <form className="flex items-center justify-center">
      <input className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Search"></input>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        
        Search
      </button>
    </form>
  </div>
</div>


    </div>
  

  
  );
};

export default Login;
