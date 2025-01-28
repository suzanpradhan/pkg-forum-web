"use client";
import { Input } from "@/components/ui/input";
import { nonempty } from "@/core/utils/formUtils";
import { useFormik } from "formik";
import { signIn } from "next-auth/react";
import Link from "next/link";
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
        // router.replace((result as any)?.callback ?? "/admin/dashboard");
        toast.success("Successfully logged in!");
      }
    } catch (error) {
      toast.error("Login Failed! Please check your credentials.");
    } finally {
      setIsLoading(false);
    }
  };

  const validateForm = (values: LoginFormInputs) => {
    try {
      loginSchema.parse(values);
      return {};
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
      email: "",
      password: "",
    },
    validateOnChange: true,
    onSubmit: handleLogin,
    validate: validateForm,
  });

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

        <form
          className="flex flex-col items-end gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            formik.handleSubmit(e);
          }}
        >
          <Input
            className="text-white"
            placeholder="Email Address"
            error={formik.touched.email ? formik.errors.email : undefined}
            {...formik.getFieldProps("email")}
          />
          <Input
            className="text-white"
            placeholder="Password"
            type="password"
            error={formik.touched.password ? formik.errors.password : undefined}
            {...formik.getFieldProps("password")}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center py-2 px-4 border border-transparent text-sm text-black bg-[#169AD6] font-helvetica font-normal"
          >
            {isLoading ? "Loading..." : "Login"}
          </button>
        </form>

        <Link href="/resetPassword/reset-password">
          <p className="mt-4 text-sm text-center text-white">
            Forgot Password?
          </p>
        </Link>

        <Link href="/register">
          <p className="mt-4 text-sm text-center text-white">
            {`Don't have an account?`}{" "}
            <span className="text-blue-500 hover:underline">Sign Up</span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Login;
