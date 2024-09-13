"use client";
import { signOut } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const LogoutPage = () => {
  const router = useRouter();

  useEffect(() => {
    signOut({ callbackUrl: '/' });
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#1E1F23]">
      <div className="w-full max-w-md p-8 space-y-4 bg-gray-800 border border-gray-700 rounded-lg shadow-2xl sm:p-10">
        <h2 className="text-2xl font-bold text-center text-white">You are logged out</h2>
        <p className="text-sm text-center text-white">You have been successfully logged out. </p>
      </div>
    </div>
  );
};

export default LogoutPage;
