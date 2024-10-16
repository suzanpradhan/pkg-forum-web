"use client";
import { useAppDispatch } from "@/core/redux/clientStore";
import authApi from "@/modules/register/registerApi";
import {
  RegisterFormInputs,
  registerSchema,
} from "@/modules/register/registerType";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Eye, EyeOff } from "lucide-react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ZodError } from "zod";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();
  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: "/" });
  };
  const dispatch = useAppDispatch();

  const validateForm = (values: RegisterFormInputs) => {
    try {
      registerSchema.parse(values);
    } catch (error) {
      if (error instanceof ZodError) {
        console.log(error.errors);
        return error.formErrors.fieldErrors;
      }
    }
  };

  const onSubmit = async (values: RegisterFormInputs) => {
    console.log(values);

    try {
      const result = await dispatch(
        authApi.endpoints.register.initiate(values)
      );

      if ("data" in result) {
        console.log("Registration successful!", result.data);
        router.push("/login");
      } else if ("error" in result) {
        console.error("Registration failed:", result.error);
      }
    } catch (error) {
      console.error("An error occurred during registration:", error);
    }
  };

  return (
    <div className="flex items-center justify-center max-h-full bg-[#15161A]">
      <div className="w-full max-w-md p-8 space-y-4  border rounded-lg shadow-2xl bg-[#5161A] border-gray-700">
        <h2 className="text-2xl font-martian-mono text-center text-white">
          Registration
        </h2>
        <p className="text-sm text-center text-gray-200 font-martian-mono">
          Let's create an account
        </p>
        <button
          onClick={handleGoogleSignIn}
          className="w-full py-2 mt-4 text-sm font-medium text-white bg-gray-600 border border-gray-700 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          <span className="inline-flex items-center font-martian-mono">
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
          <span className="text-xs uppercase text-gray-300 font-martian-mono">
            or register with email
          </span>
          <span className="w-1/5 border-b border-gray-600 lg:w-1/4"></span>
        </div>

        <Formik
          initialValues={{
            fullName: "",
            email: "",
            phone: "",
            password: "",
            confirmPassword: "",
          }}
          validate={validateForm}
          onSubmit={onSubmit}
        >
          {() => (
            <Form className="mt-4 space-y-4">
              <Field
                type="text"
                name="fullName"
                placeholder="Full Name"
                className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-gray-200 border-gray-600 font-martian-mono"
              />
              <ErrorMessage
                name="fullName"
                component="p"
                className="text-red-500"
              />
              <Field
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-gray-200 border-gray-600"
              />
              <ErrorMessage
                name="email"
                component="p"
                className="text-red-500"
              />

              <Field
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-gray-200 border-gray-600"
              />
              <ErrorMessage
                name="phone"
                component="p"
                className="text-red-500"
              />

              <div className="space-y-4">
                <div className="relative">
                  <Field
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Your Password"
                    className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-gray-200 border-gray-600"
                  />
                  <div
                    className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5 text-gray-400" />
                    ) : (
                      <Eye className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                  <ErrorMessage
                    name="password"
                    component="p"
                    className="text-red-500"
                  />
                </div>

                <div className="relative">
                  <Field
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-gray-200 border-gray-600"
                  />
                  <div
                    className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-5 h-5 text-gray-400" />
                    ) : (
                      <Eye className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                  <ErrorMessage
                    name="confirmPassword"
                    component="p"
                    className="text-red-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2 text-sm font-medium text-white rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 bg-purple-600"
              >
                Register
              </button>
            </Form>
          )}
        </Formik>
        <Link href="/login">
          <p className="mt-4 text-sm text-center text-gray-200 font-martian-mono">
            Already have an account?{" "}
            <span className="hover:underline text-blue-400 font-martian-mono">
              Sign In
            </span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Register;
