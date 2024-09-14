"use client";

import { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: "/" });
    console.log("userdetails");
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
  };

  return (
    <div className="flex items-center justify-center max-h-full bg-[#1E1F23]">
      <div className="w-full max-w-md p-8 space-y-4 rounded-lg shadow-2xl bg-gray-800 border-gray-700">
        <h2 className="text-2xl font-bold text-center  text-white">
          Registration
        </h2>
        <p className="text-sm text-center text-gray-200">
          Let's create an account
        </p>

        <button
          onClick={handleGoogleSignIn}
          className="w-full py-2 mt-4 text-sm font-medium text-white bg-gray-600 border border-gray-700 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          <span className="inline-flex items-center">
            <img
              className="w-5 h-5 mr-2"
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google logo"
            />
            Continue with Google
          </span>
        </button>

        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b border-gray-600 lg:w-1/4"></span>
          <span className="text-xs  uppercase text-gray-300">
            or register with email
          </span>
          <span className="w-1/5 border-b border-gray-600 lg:w-1/4"></span>
        </div>

        <form className="mt-4 space-y-4" onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-gray-200 border-gray-600"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-gray-200 border-gray-600"
          />

          <input
            type="password"
            placeholder="Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-gray-200 border-gray-600"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-gray-200 border-gray-600"
          />
          <button
            type="submit"
            className="w-full py-2 text-sm font-medium text-white rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 bg-purple-600"
          >
            Register
          </button>
        </form>

        <Link href="/login">
          <p className="mt-4 text-sm text-center  text-gray-200">
            Already have an account?{" "}
            <span className=" hover:underline text-blue-400">Sign In</span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Register;
