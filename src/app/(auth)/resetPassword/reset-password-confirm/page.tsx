
"use client";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const ResetPasswordConfirm = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const urlParams = new URLSearchParams(window.location.search);
    const uid = urlParams.get("uid");
    const token = urlParams.get("token");

    if (!uid || !token) {
      toast.error("Invalid reset link.");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match.");
      setLoading(false);
      return;
    }

    try {
      
      const response = await axios.post(
        "http://your-django-api-url/auth/password-reset-confirm/",
        { uid, token, new_password: newPassword }
      );
      if (response.status === 200) {
        toast.success("Password reset successfully. Please log in.");
        router.replace("/login");
      }
    } catch (error) {
      toast.error("Failed to reset password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#1E1F23]">
      <div className="w-full max-w-md p-8 space-y-4 bg-gray-800 border border-gray-700 rounded-lg shadow-2xl sm:p-10">
        <h2 className="text-2xl font-bold text-center text-white">
          Set New Password
        </h2>
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="New Password"
            className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-gray-200 border-gray-600"
            required
          />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm New Password"
            className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-gray-200 border-gray-600"
            required
          />
          <button
            type="submit"
            className="w-full py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordConfirm;
