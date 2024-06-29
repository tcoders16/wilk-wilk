"use client";
import React from "react";
import { ContainerScroll } from '../ui/ContainerScroll';
import Image from "next/image";

export default function HeroScrollBrandName() {
  console.log("HeroScrollDemo component is rendering");
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-zinc-600 animate-fadeIn">

              </h1>
          </>
        }
      >
        <div className="flex justify-center p-4 bg-white rounded-2xl"> {/* Ensure white background and padding */}
          <div className="bg-white p-4 rounded-2xl shadow-lg"> {/* Add shadow for better visual separation */}
            <Image
              src="/Family.jpg" // Ensure the correct path to your image
              alt="hero"
              layout="responsive"
              height={720}
              width={1400}
              className="mx-auto block rounded-2xl object-cover h-full w-full" 
              draggable={false}
            />
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
}