"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
  username: z.string().min(1, "Please enter your username"),
  password: z.string().min(1, "Please enter your password"),
});

type LoginSchema = z.infer<typeof loginSchema>;

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginSchema) => {
    console.log("Login data:", data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6">
      <div className="w-[400px] max-w-md p-8 space-y-6 bg-white rounded-lg sm:p-10 ">
        <Image
          src="/assets/logo-ipsum.png"
          alt="Logo"
          width={134}
          height={24}
          className="mx-auto mb-4"
        />

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-black"
              style={{ fontFamily: "Archivo" }}
            >
              Username
            </label>
            <Input
              type="text"
              placeholder="Input username"
              className="mt-2"
              style={{ fontFamily: "Archivo" }}
              {...register("username")}
            />
            {errors.username && (
              <p className="text-sm text-red-500 mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-black"
              style={{ fontFamily: "Archivo" }}
            >
              Password
            </label>
            <div className="relative mt-2">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Input password"
                className="pr-10"
                style={{ fontFamily: "Archivo" }}
                {...register("password")}
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute inset-y-0 right-2 flex items-center text-gray-500"
                tabIndex={-1}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-sm text-red-500 mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            style={{ fontFamily: "Archivo" }}
          >
            Login
          </Button>
        </form>

        <p
          className="text-sm text-center text-gray-600"
          style={{ fontFamily: "Archivo" }}
        >
          Don't have an account?{" "}
          <a
            href="/auth/register"
            className="text-blue-500 hover:underline underline underline-offset-1"
          >
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
