"use client";

import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";

export function PlaceholdersAndVanishInputComponent() {
  const placeholders = [
    "What is the proper brushing technique?",
    "How often should you replace your toothbrush?",
    "What are the benefits of flossing daily?",
    "What causes tooth decay?",
    "How often should you visit the dentist?",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="h-[40rem] flex flex-col justify-center items-center px-4">
      <h2 className="mb-10 sm:mb-20 text-3xl text-center sm:text-5xl dark:text-white text-gray-800">
        Ask Dr. Wilk About Oral Hygiene
      </h2>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
