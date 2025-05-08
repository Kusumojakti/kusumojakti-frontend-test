"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectContent,
} from "@/components/ui/select";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";

const registSchema = z.object({
  username: z.string().min(1, "Username field cannot be empty"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

type RegistSchema = z.infer<typeof registSchema>;

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistSchema>({
    resolver: zodResolver(registSchema),
  });

  const onSubmit = (data: RegistSchema) => {
    console.log("Login data:", data);
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6">
      <div className="w-[400px] max-w-md p-8 space-y-6 bg-white rounded-lg sm:p-10">
        <Image
          src="/assets/logo-ipsum.png"
          alt="Logo"
          width={134}
          height={24}
          className="mx-auto mb-4"
        />
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
              style={{ fontFamily: "Archivo" }}
            >
              Username
            </Label>
            <Input
              type="text"
              placeholder="Input username"
              className="mt-1"
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
            <Label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
              style={{ fontFamily: "Archivo" }}
            >
              Password
            </Label>
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
          <div>
            <Label
              htmlFor="role"
              className="block text-sm font-medium text-gray-700"
              style={{ fontFamily: "Archivo" }}
            >
              Role
            </Label>
            <Select>
              <SelectTrigger
                className="w-full mt-1"
                style={{ fontFamily: "Archivo" }}
              >
                <SelectValue placeholder="Select role" />
              </SelectTrigger>
              <SelectContent style={{ fontFamily: "Archivo" }}>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="user">User</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 mt-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Register
          </button>
        </form>
        <p className="text-sm text-center text-gray-600">
          Already have an account?{" "}
          <a
            href="/auth/login"
            className="text-blue-600 underline underline-offset-1"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
