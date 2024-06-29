"use client"
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "../utils/cn";

export default function AppointmentForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const commonClasses = "bg-white dark:bg-black border border-gray-300 dark:border-gray-700 text-black dark:text-white p-2 rounded-md w-full h-12";
  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-6 md:p-10 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-3xl text-neutral-800 dark:text-neutral-200 animate-pulse">
        Book an Appointment
      </h2>
      <p className="text-neutral-600 text-base max-w-sm mt-2 dark:text-neutral-300">
        Please fill in the details below to book an appointment.
      </p>

      <form className="my-8 space-y-6" onSubmit={handleSubmit}>
      <LabelInputContainer>
          <Label htmlFor="date">Date</Label>
          <Input id="date" type="date" className={commonClasses} />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="time">Time</Label>
          <Input id="time" type="time" className={commonClasses} />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="doctor">Doctor</Label>
          <select id="doctor" className={commonClasses}>
            <option value="Dr. Kevin Wilk">Dr. Kevin Wilk</option>
            <option value="Dr. Brian Wilk">Dr. Brian Wilk</option>
            <option value="Dr. Smith">Dr. Smith</option>
            <option value="Dr. Johnson">Dr. Johnson</option>
            <option value="Dr. Williams">Dr. Williams</option>
            <option value="Dr. Jones">Dr. Jones</option>
            <option value="Dr. Brown">Dr. Brown</option>
            <option value="Dr. Davis">Dr. Davis</option>
            <option value="Dr. Miller">Dr. Miller</option>
            <option value="Dr. Wilson">Dr. Wilson</option>
            <option value="Dr. Moore">Dr. Moore</option>
            <option value="Dr. Taylor">Dr. Taylor</option>
          </select>
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="description">Description</Label>
          <Input id="description" placeholder="Description" type="text" className={commonClasses} />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="location">Location</Label>
          <select id="location" className={commonClasses}>
            <option value="oakville">Oakville</option>
            <option value="cambridge">Cambridge</option>
          </select>
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-12 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Book Appointment &rarr;
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
}; 
