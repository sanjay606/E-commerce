import React, { useState } from "react";
import Header from "./Header";

const Login = () => {

  const [IsSignInform ,setIsSignInform] = useState()


const toogleSignInForm = () => {
  setIsSignInform(!IsSignInform)
}

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fa7be975-efc3-48c6-8188-f07fdd1aa476/web/IN-en-20250428-TRIFECTA-perspective_e045264e-b4d4-4a6f-b2cc-f95e3344a332_medium.jpg"
          alt="bag_img"
        />
      </div>
      <form className=" w-3/12 p-12 my-36 mx-auto right-0 left-0 absolute bg-black text-white bg-opacity-80 rounded-lg">
        <h1 className="font-bold text-3xl">{ IsSignInform ? "Sign In " : "Sign Up"} </h1>
        {!IsSignInform &&(<input
        type="Text"
        placeholder="Full Name "
        className="p-2 my-4 w-full bg-gray-700"
      />)}
        <input
          type="Text"
          placeholder="Email Address "
          className="p-2 my-4 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password "
          className="p-2 my-4 w-full bg-gray-700"
        />
        <button className=" bg-red-500 w-full rounded-lg p-2 my-6">
        { IsSignInform ? "Sign In " : "Sign Up"}
        </button>
        <p className="my-4" onClick={toogleSignInForm}>{IsSignInform ? "New to Netflix?Sign Up now." : "Already Registered?Sign In now "}</p>
      </form>
    </div>
  );
};

export default Login;
