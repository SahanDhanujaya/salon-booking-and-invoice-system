"use client";

import { useEffect, useState } from "react";
import type { SigninType as SigninFormData } from "@/types/login";
import { EyeIcon, EyeClosedIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { login } from "@/services/authService";
import PageLoader from "@/components/common/PageLoader";
import { useLoader } from "@/app/provider/LoaderContext";
import LoaderLink from "@/components/common/LoaderLink";

const Signin = () => {
  const [formData, setFormData] = useState<SigninFormData>({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const { startLoading, stopLoading, isLoading } = useLoader();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validateFields = () => {
    if (formData.email === "") {
      toast.warn("Email is can not be empty!");
      return false;
    }
    if (formData.password === "") {
      toast.warn("Password is can not be empty!");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    startLoading();
    e.preventDefault();
    console.log(formData, rememberMe);
    if (!validateFields()) return;
    try {
      const response = await login(formData);
      if (response?.status === 200) {
        toast.success("Loging Successfull!");
        router.push("/dashboard");
      } else {
        toast.error("Loging Unsuccessfull!");
      }
    } catch (error) {
      console.log("Login Failed!", error);
      toast.error("Login Failed!");
    }
    stopLoading();
  };

  useEffect(() => {
    stopLoading();
  });

  if (isLoading) return <PageLoader />;

  return (
    <div className="min-h-screen w-full bg-linear-to-br from-slate-100 via-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="rounded-3xl bg-white/80 backdrop-blur-xl shadow-2xl border border-white/40 p-8">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white text-xl font-bold shadow-lg">
              S
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
            <p className="mt-2 text-sm text-gray-500">
              Sign in to continue to your dashboard
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 pr-16 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-small text-blue-600 hover:text-blue-700"
                >
                  {showPassword ? <EyeClosedIcon /> : <EyeIcon />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-600">
                <input
                  type="checkbox"
                  className="rounded border-gray-300"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                Remember me
              </label>

              <a
                href="#"
                className="font-medium text-blue-600 hover:text-blue-700"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-700 hover:shadow-xl"
            >
              Sign In
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-500">
            Don’t have an account?{" "}
            <LoaderLink
              href="/auth/signup"
              className="font-semibold text-blue-600 hover:text-blue-700"
            >
              Create One
            </LoaderLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
