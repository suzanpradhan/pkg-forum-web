"use client";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Link from "next/link";

const RequestResetPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "https://pkg-forum.suzanpradhan.com.np/api/v1/password_reset",
        { email }
      );
      if (response.status === 200) {
        toast.success("Password reset link sent to your email.");
      }
    } catch (error) {
      toast.error("Failed to send reset link. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#15161A]">
      <div className="w-full max-w-md p-8 space-y-4 bg-[#15161A] border border-gray-700 rounded-lg shadow-2xl sm:p-10">
        <h2 className="text-2xl font-bold text-center text-white">
          Reset Password
        </h2>
        <p className="text-sm text-center text-white">
          Enter your email to receive a password reset link
        </p>

        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-gray-200 border-gray-600"
            required
          />
          <button
            type="submit"
            className="w-full py-2 text-sm font-medium text-white bg-[#F65930] rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>

        <Link href="/login">
          <p className="mt-4 text-sm text-center text-white">
            Remembered your password?{" "}
            <span className="text-blue-500 hover:underline">Login</span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default RequestResetPassword;
