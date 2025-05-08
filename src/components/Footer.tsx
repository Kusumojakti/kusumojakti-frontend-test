import React from "react";

export default function Footer() {
  return (
    <footer className="w-full h-full bg-[#2563EBDB] shadow">
      <div className="w-full max-w-screen-xl mx-auto md:py-8">
        <div className="sm:flex sm:justify-center">
          <div className="flex flex-row sm:flex-col justify-center mb-1 sm:mb-0 space-x-3 rtl:space-x-reverse pt-4 md:pt-0 lg:pt-0">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="md:block lg:block sm:hidden"
            >
              <img
                src="/assets/logo-ipsum-white.png"
                className="h-6 "
                alt="logo"
              />
            </a>
          </div>
          <div className="text-center ms-0 sm:ms-4">
            <span
              className="text-sm sm:text-base font-normal text-white"
              style={{ fontFamily: "Archivo" }}
            >
              © 2025 Blog genzet. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
