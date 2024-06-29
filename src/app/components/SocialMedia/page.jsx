"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { TracingBeam } from "../ui/TracingBeam";

const socialMediaAccounts = [
  {
    id: 1,
    name: "Twitter",
    designation: "@twitter",
    image: "/twitter.webp",
  },
  {
    id: 2,
    name: "Facebook",
    designation: "@facebook",
    image: "/facebook.png",
  },
  {
    id: 3,
    name: "Instagram",
    designation: "@instagram",
    image: "/instagram.jpeg",
  },
  {
    id: 4,
    name: "LinkedIn",
    designation: "@linkedin",
    image: "/linkedin.png",
  },
  {
    id: 5,
    name: "YouTube",
    designation: "@youtube",
    image: "/youtube.png",
  },
];

export default function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full mt-[200px]">
      <AnimatedTooltip items={socialMediaAccounts} />
    </div>
  );
}