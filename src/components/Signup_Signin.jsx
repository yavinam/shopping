import React, { useState } from "react";
import Modal from "./Modal";

function Signup_Signin() {
  const [openSignUp, setOpenSignUp] = useState(false);
  const [openSignIn, setOpenSignIn] = useState(false);

  return (
    <div className="header flex flex-col justify-center items-center gap-6 p-8 bg-gradient-to-r from-blue-500 to-purple-500 shadow-md ">
      <div className="flex gap-4">
        <button
          className="bg-white px-6 py-2 rounded-full text-sm font-bold text-blue-600 hover:shadow-lg transform transition duration-300 ease-in-out hover:scale-105"
          onClick={() => {
            setOpenSignUp(true);
            setOpenSignIn(false);
          }}
        >
          Sign up
        </button>
        <button
          className="bg-white px-6 py-2 rounded-full text-sm font-bold text-purple-600 hover:shadow-lg transform transition duration-300 ease-in-out hover:scale-105"
          onClick={() => {
            setOpenSignUp(false);
            setOpenSignIn(true);
          }}
        >
          Sign in
        </button>
      </div>
      {openSignUp && (
        <Modal close={() => setOpenSignUp(false)}>
          <div className="w-[400px] bg-white p-6 rounded-2xl shadow-xl relative">
            <h1 className="text-3xl font-semibold text-center text-blue-500 mb-6">
              Create Your Account
            </h1>
            <div className="flex flex-col gap-4">
              <input
                className="border-2 border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Name"
              />
              <input
                className="border-2 border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Email"
              />
              <input
                className="border-2 border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="password"
                placeholder="Password"
              />
              <input
                className="border-2 border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="password"
                placeholder="Confirm Password"
              />
              <input
                className="border-2 border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Username"
              />
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <span
                  className="text-blue-500 font-bold cursor-pointer hover:underline"
                  onClick={() => {
                    setOpenSignUp(false);
                    setOpenSignIn(true);
                  }}
                >
                  Sign in
                </span>
              </p>
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-full font-bold hover:shadow-lg transform transition duration-300 ease-in-out hover:scale-105">
                Create Account
              </button>
              <button
                className="w-full bg-gray-400 text-white py-3 rounded-full font-bold hover:shadow-lg transform transition duration-300 ease-in-out hover:scale-105"
                onClick={() => setOpenSignUp(false)}
              >
                Close
              </button>
            </div>
          </div>
        </Modal>
      )}

      {openSignIn && (
        <Modal close={() => setOpenSignIn(false)}>
          <div className="w-[400px] bg-white p-6 rounded-2xl shadow-xl relative">
            <h1 className="text-3xl font-semibold text-center text-purple-500 mb-6">
              Login to Your Account
            </h1>
            <div className="flex flex-col gap-4">
              <input
                className="border-2 border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                type="text"
                placeholder="Email"
              />
              <input
                className="border-2 border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                type="password"
                placeholder="Password"
              />
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <span
                  className="text-purple-500 font-bold cursor-pointer hover:underline"
                  onClick={() => {
                    setOpenSignUp(true);
                    setOpenSignIn(false);
                  }}
                >
                  Sign up
                </span>
              </p>
              <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-full font-bold hover:shadow-lg transform transition duration-300 ease-in-out hover:scale-105">
                Login
              </button>
              <button
                className="w-full bg-gray-400 text-white py-3 rounded-full font-bold hover:shadow-lg transform transition duration-300 ease-in-out hover:scale-105"
                onClick={() => setOpenSignIn(false)}
              >
                Close
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default Signup_Signin;
