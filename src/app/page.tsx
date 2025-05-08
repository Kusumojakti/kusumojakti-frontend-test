"use client";

import NavbarUser from "@/components/NavbarUser";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import CardArticles from "@/components/CardArticles";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <NavbarUser />
      <div className="relative isolate h-[550px] w-screen">
        <div>
          <img
            src="/assets/image-heroes.jpg"
            alt="oke"
            className="w-screen h-[550px] object-cover bg-blue-500"
          />
          <div className="absolute inset-0 bg-[#2563EBDB]"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center z-10 flex-col p-0">
          <p
            className="text-white text-base font-semibold mb-2"
            style={{ fontFamily: "Archivo" }}
          >
            Blog genzet
          </p>
          <h4
            className="text-white text-4xl sm:text-5xl font-semibold h-[160px] sm:h-[96px] w-[337px] sm:w-[730px] text-center"
            style={{ fontFamily: "Archivo" }}
          >
            The Journal : Design Resources, Interviews, and Industry News
          </h4>
          <h6
            className="text-white text-normal sm:text-xl font-regular h-[28px] sm:h-[32px] w-[337px] sm:w-[730px] text-center mt-2"
            style={{ fontFamily: "Archivo" }}
          >
            Your daily dose of design insights!
          </h6>
          <div className="bg-blue-500 rounded-md p-3 flex sm:flex-row flex-col mt-[40px] w-[337px] sm:w-fit">
            <div className="bg-white rounded-md">
              <Select>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue
                    placeholder="Select category"
                    style={{ fontFamily: "Archivo" }}
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Category</SelectLabel>
                    <SelectItem value="sport">Sport</SelectItem>
                    <SelectItem value="entertain">Entertainment</SelectItem>
                    <SelectItem value="tech">Techonolgy</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="relative bg-white rounded-md w-full sm:w-[400px] h-[40px] sm:ms-3 ms-0 sm:mt-0 mt-3">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <Input
                className="w-full h-full pl-10"
                placeholder="Search articles"
                style={{ fontFamily: "Archivo" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="ps-7 sm:ps-40 pe-4 sm:pe-40 pt-[40px] pb-20">
        <p
          className="text-base font-medium text-slate-600"
          style={{ fontFamily: "Archivo" }}
        >
          Showing : 20 of 240 articles
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-10 gap-y-8">
          <CardArticles
            title="Cybersecurity Essentials Every Developer Should Know"
            description="Protect your apps and users with these fundamental cybersecurity practices for developers."
            imageUrl="https://images.unsplash.com/photo-1735825764457-ffdf0b5aa5dd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
            tags={["Techonology", "Design"]}
          />
          <CardArticles
            title="Cybersecurity Essentials Every Developer Should Know"
            description="Protect your apps and users with these fundamental cybersecurity practices for developers."
            imageUrl="https://images.unsplash.com/photo-1735825764457-ffdf0b5aa5dd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
            tags={["Techonology", "Design"]}
          />
          <CardArticles
            title="Cybersecurity Essentials Every Developer Should Know"
            description="Protect your apps and users with these fundamental cybersecurity practices for developers."
            imageUrl="https://images.unsplash.com/photo-1735825764457-ffdf0b5aa5dd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
            tags={["Techonology", "Design"]}
          />
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-10 gap-y-8">
          {/* Artikel */}
        </div>

        <Pagination className="mt-10 flex justify-center">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
      <Footer />
    </>
  );
}
