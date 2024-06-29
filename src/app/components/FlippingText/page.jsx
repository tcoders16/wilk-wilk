"use client"
import React, {useState} from "react";
import { FlipWords } from "../ui/flip-words";

export default function FlippingText() {
    const words = ["healthy", "bright", "strong", "beautiful", "confident"];
    const [isLightMode, setIsLightMode] = useState(false);

    return (
        <div className="h-[40rem] flex justify-center items-center  ml-12 ">
            <div className="text-3xl mx-auto font-normal text-neutral-600 dark:text-neutral-100">
                Achieve a
                <FlipWords words={words} className={isLightMode ? "text-zinc-900" : "text-zinc-400"} /> <br />
                smile with our dental care
            </div>
        </div>
    );
}
