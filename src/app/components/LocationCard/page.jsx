"use client";
import React from "react";
import { PinContainer } from "../ui/pinPerspective";

export default function LocationCard() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center ">
      <PinContainer
        title=" N1R 7L7"
        href="https://www.google.com/maps/place/Wilk+%26+Wilk+Orthodontics/@43.390872,-80.3169006,17z/data=!3m1!4b1!4m6!3m5!1s0x882b5e70c6f23907:0x6aff563af6aee1ad!8m2!3d43.390872!4d-80.3143257!16s%2Fg%2F11bbx0ph6r?entry=ttu"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
          Cambridge
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
            350 Conestoga Blvd., Unit A
            Cambridge, ON N1R 7L7
            </span>
          </div>
          <div 
            className="flex flex-1 w-full rounded-lg mt-4 "
            style={{
              backgroundImage: "url('/Office.webp')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </div>
      </PinContainer>
    </div>
  );
}
