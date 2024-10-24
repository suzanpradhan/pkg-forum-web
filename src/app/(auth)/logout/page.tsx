"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const logoutSchema = z.object({});

type LogoutFormInputs = z.infer<typeof logoutSchema>;

const LogoutPage = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LogoutFormInputs>({
    resolver: zodResolver(logoutSchema),
  });

  const onSubmit = async (data: LogoutFormInputs) => {
    console.log("Logging out...");
    await signOut({ callbackUrl: "/" });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#1E1F23]">
      <div className="w-full max-w-md p-8 space-y-4 bg-gray-800 border border-gray-700 rounded-lg shadow-2xl">
        <h2 className="text-2xl font-bold text-center text-white">
          Are you sure you want to log out?
        </h2>
        <p className="text-sm text-center text-white">
          You can provide feedback below (optional).
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
          {/* <textarea
            placeholder="Your feedback (optional)"
            {...register("feedback")}
            className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-gray-200 border-gray-600"
          />
          {errors.feedback && (
            <p className="text-red-500">{errors.feedback.message}</p>
          )} */}
          <button
            type="submit"
            className="w-full py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            Confirm Logout
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogoutPage;
