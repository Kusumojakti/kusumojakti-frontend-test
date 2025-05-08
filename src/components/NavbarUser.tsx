"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function NavbarUser() {
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
    <nav
      className={`fixed w-full z-50 transition-colors duration-300 ${
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
                  src="/assets/logo-ipsum-white.png"
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
                  isScrolled ? "text-black" : "text-white"
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
  );
}
