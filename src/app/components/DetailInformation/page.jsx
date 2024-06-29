"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../ui/TracingBeam";

export function DetailInformation() {
  return (
      <div className="max-w-2xl mx-auto antialiased pt-4 relative overflow-auto">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className={twMerge("text-xl mb-4")}>
              {item.title}
            </p>

            <div className="text-sm prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>

  );
}

const dummyContent = [
  {
    title: "Meet Drs. Brian and Kevin Wilk",
    description: (
      <>
        <p>
          Our long journey to become certified specialists in Orthodontics began at an early age when we both became interested in the sciences, and individually, our formal education stories are similar, just one year apart: following graduation from Ontario universities, we each spread our wings and traveled south of the border to Boston, Massachusetts, where we both graduated from Tufts University School of Dental Medicine. Following graduation, we entered different postgraduate specialty training programs offering different treatment perspectives and two years later, graduated as certified specialists in Orthodontics.
        </p>
        <p>
          Shortly after returning to Canada, loaded with the credentials and lots of ambition, we combined our creative energies and founded Wilk & Wilk Orthodontics in 1997. This only seemed natural since we have always been driven by a shared set of goals and values. From the beginning, following many late nights, early mornings, weekends, and with miles of effort, we slowly started carving out our own niche while working very hard to earn the trust and respect of our patients, patient families, and professional colleagues. All of this was done one patient at a time.
        </p>
      </>
    ),
    badge: "Introduction",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Our Journey",
    description: (
      <>
        <p>
          Along the way, we have smiled, laughed, and tackled challenges side-by-side with an amazing group of like-minded people while providing a wide array of orthodontic solutions that made the most sense to our patient families. We went to great lengths to be responsive to our patients’ needs so they always felt taken care of. Over 25 amazing years and thousands of beautiful smiles later, we still enjoy being connected, reachable, and committed to our patients. We stay agile and refuse to rest on our laurels and continue to invite constructive criticism to make us better.
        </p>
        <p>
          While we continue to be inspired by and to embrace new emerging technologies in this digital playing field, our core focus remains the same: treat people really well while creating beautiful, healthy smiles using the best treatment we know, in a warm and professional manner, and with amazing attention to detail. We are proud that our Cambridge and Oakville offices continue to grow by positive word-of-mouth referrals because we feel that this is the most important and authentic social media.
        </p>
      </>
    ),
    badge: "Our Journey",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "The Future",
    description: (
      <>
        <p>
          The future is very bright at Wilk & Wilk and we are really excited to be reconnecting with former patients who have now entered the dental field and with those who are now bringing their children to us for their orthodontic treatment. Where have all the years gone?
        </p>
        <p>
          In consideration of the kind words our patients say about us and for the care our patients and their families continue to entrust us with, we would simply like to say: THANK YOU.
        </p>
      </>
    ),
    badge: "Future",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
