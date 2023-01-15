'use client'
import request from "../utils/request";
import React from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="flex justify-center bg-gray-600 text-gray-200 select-none text-xl lg:text-2xl">
      {Object.entries(request).map(([key, { title, url }]) => {
        return (
          <h2
            onClick={() => router.push(`?genre=${key}`)}
            className="m-6 cursor-pointer hover:text-white active:text-red-400"
            key={key}
          >
            {title}
          </h2>
        );
      })}
    </div>
  );
};

export default Navbar;
