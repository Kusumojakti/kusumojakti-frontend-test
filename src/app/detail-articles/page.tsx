"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import NavbarUser from "@/components/NavbarUser";

export default function DetailArticles() {
  const [isScrolled, setIsScrolled] = useState(false);

  const userName = "James Dean";
  const initial = userName.charAt(0).toUpperCase();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-colors border border-bottom-1 duration-300 ${
          isScrolled ? "bg-white shadow border" : "bg-transparent"
        } h-[64px] sm:h-[96px]`}
      >
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between">
            <div className="flex flex-1 items-center justify-start sm:items-center">
              <div className="flex items-center h-[64px] sm:h-[96px] p-3 sm:p-0">
                {isScrolled ? (
                  <Image
                    alt="Logo Ipsum"
                    src="/assets/logo-ipsum.png"
                    width={134}
                    height={24}
                  />
                ) : (
                  <Image
                    alt="Logo Ipsum"
                    src="/assets/logo-ipsum.png"
                    width={134}
                    height={24}
                  />
                )}
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-3">
                <div
                  className="w-10 h-10 rounded-full bg-blue-200 text-black flex items-center justify-center text-lg font-semibold"
                  style={{ fontFamily: "Archivo" }}
                >
                  {initial}
                </div>
                <span
                  className={`hidden sm:inline text-sm font-medium underline ${
                    isScrolled ? "text-black" : "text-black"
                  }`}
                  style={{ fontFamily: "Archivo" }}
                >
                  {userName}
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="ps-40 pe-40">
        <div className="pt-30 flex justify-center">
          <p
            className="text-center text-sm text-slate-600"
            style={{ fontFamily: "Archivo" }}
          >
            February 4, 2025 · Created by Admin
          </p>
        </div>
        <div className="flex justify-center items-center">
          <h1
            className="w-[642px] h-[72px] justify-center text-center text-3xl font-semibold mt-[16px]"
            style={{ fontFamily: "Archivo" }}
          >
            Figma's New Dev Mode: A Game-Changer for Designers & Developers
          </h1>
        </div>
        <img
          src="https://images.unsplash.com/photo-1735825764457-ffdf0b5aa5dd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-full h-[480px] object-cover mt-[40px] rounded-md"
        />
        <p
          className="text-base font-normal text-slate-700 mt-[40px]"
          style={{ fontFamily: "Archivo" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quae
          laborum vero laboriosam error odit omnis hic vitae quis voluptatem!
          Repellat obcaecati minus pariatur commodi accusantium veritatis
          officia similique ipsum neque laboriosam quod, rerum temporibus ex vel
          asperiores. Cumque itaque officiis totam corporis eos quod deleniti
          tempore voluptatum quo labore.
        </p>
      </div>
    </>
  );
}
