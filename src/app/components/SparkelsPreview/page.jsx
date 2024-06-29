"use client";
import React from "react";
import { SparklesCore } from "../ui/sparkels";

export default function SparklesPreview() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="h-[40rem] w-[40rem] bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <h1 className="md:text-5xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
        Prophylaxis
        </h1>
        <div className="w-[30rem] h-30 relative mt-5">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500  to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>
    </div>
  );
}
