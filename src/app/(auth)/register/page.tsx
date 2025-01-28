"use client";
import { Input } from "@/components/ui/input";
import { useAppDispatch } from "@/core/redux/clientStore";
import authApi from "@/modules/register/registerApi";
import {
  RegisterFormInputs,
  registerSchema,
} from "@/modules/register/registerType";
import { useFormik } from "formik";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ZodError } from "zod";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: "/" });
  };
  const dispatch = useAppDispatch();

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

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
    validateOnChange: true,
    onSubmit,
    validate: validateForm,
  });

  return (
    <div className="flex items-center justify-center max-h-full bg-[#15161A]">
      <div className="w-full max-w-md p-8 space-y-4  border rounded-lg shadow-2xl bg-[#5161A] border-gray-700">
        <h2 className="text-2xl font-martian-mono text-center text-white">
          Registration
        </h2>
        <p className="text-sm text-center text-gray-200 font-martian-mono">
          {`Let's create an account`}
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

        <form
          className="flex flex-col items-end gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            formik.handleSubmit(e);
          }}
        >
          <Input
            className="text-white"
            placeholder="full Name"
            error={formik.touched.fullName ? formik.errors.fullName : undefined}
            {...formik.getFieldProps("fullName")}
          />

          <Input
            className="text-white"
            placeholder="email"
            error={formik.touched.email ? formik.errors.email : undefined}
            {...formik.getFieldProps("email")}
          />
          <Input
            className="text-white"
            placeholder="phone"
            error={formik.touched.phone ? formik.errors.phone : undefined}
            {...formik.getFieldProps("phone")}
          />
          <Input
            className="text-white"
            placeholder="Password"
            type="password"
            error={formik.touched.password ? formik.errors.password : undefined}
            {...formik.getFieldProps("password")}
          />
          <Input
            className="text-white"
            placeholder="confirmPassword"
            type="password"
            error={
              formik.touched.confirmPassword
                ? formik.errors.confirmPassword
                : undefined
            }
            {...formik.getFieldProps("confirmPassword")}
          />

          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center py-2 px-4 border border-transparent text-sm text-black bg-[#169AD6] font-helvetica font-normal"
          >
            {isLoading ? "Loading..." : "Register"}
          </button>
        </form>

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
