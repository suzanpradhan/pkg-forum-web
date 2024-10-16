"use client";
import { nonempty } from "@/core/utils/formUtils";
import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import { Eye, EyeOff } from "lucide-react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import router from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";
import { z, ZodError } from "zod";

const loginSchema = z.object({
  email: z.string().pipe(nonempty),
  password: z.string().pipe(nonempty),
});

type LoginFormInputs = z.infer<typeof loginSchema>;

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleLogin = async (values: LoginFormInputs) => {
    const validation = loginSchema.safeParse(values);

    if (!validation.success) {
      console.error("Validation failed:", validation.error.format());
      return;
    }

    setIsLoading(true);
    try {
      const result = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: true,
        callbackUrl: "/",
      });

      console.log("result", result);

      if (result?.error) {
        toast.error("Login Failed! Please check your credentials.");
      } else {
        router.replace((result as any)?.callback ?? "/admin/dashboard");
        toast.success("Successfull  your logged in!");
      }
    } catch (error) {
      toast.error("Login Failed! Please check your credentials.");
    } finally {
      setIsLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      const validation = loginSchema.safeParse(values);
      return validation.success ? {} : validation.error.format();
    },
    onSubmit: handleLogin,
  });

  const validateForm = (values: LoginFormInputs) => {
    try {
      loginSchema.parse(values);
    } catch (error) {
      if (error instanceof ZodError) {
        console.log(error.errors);
        return error.formErrors.fieldErrors;
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#15161A]">
      <div className="w-full max-w-md p-8 bg-[#15161A] border border-gray-700 rounded-lg shadow-2xl sm:p-10">
        <h2 className="text-2xl font-bold text-center text-white">
          Welcome Back!
        </h2>
        <p className="text-sm text-center text-white">
          Sign in by entering the information below
        </p>

        <button className="w-full py-2 mt-4 text-sm font-medium text-white bg-gray-600 border border-gray-700 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
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
          <span className="w-1/5 border-b border-gray-500 lg:w-1/4"></span>
          <span className="text-xs text-white uppercase">
            or login with email
          </span>
          <span className="w-1/5 border-b border-gray-500 lg:w-1/4"></span>
        </div>

        <Formik
          initialValues={formik.initialValues}
          validate={validateForm}
          onSubmit={handleLogin}
        >
          {({ errors, touched }) => (
            <Form className="mt-4 space-y-4">
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

              {/* <Field
                type="password"
                name="password"
                placeholder="Your Password"
                className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-gray-200 border-gray-600"
              />
              <ErrorMessage
                name="password"
                component="p"
                className="text-red-500"
              /> */}
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
              </div>

              <div className="flex items-center justify-between">
                <Link
                  href="/resetPassword/reset-password"
                  className="text-sm text-blue-500 hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                {isLoading ? "Logging in..." : "Login"}
              </button>
            </Form>
          )}
        </Formik>

        <Link href="/register">
          <p className="mt-4 text-sm text-center text-white">
            Don't have an account?{" "}
            <span className="text-blue-500 hover:underline">Sign Up</span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Login;
