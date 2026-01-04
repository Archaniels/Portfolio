"use client";

import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const images = [
  "img/InAFlash/Views.jpeg",
  "img/InAFlash/Jeda Coffee (Market Day).jpeg",
  "img/InAFlash/Jeda Coffee (Successful Pitching).jpeg",
  "img/InAFlash/MainPP.jpg",
  "img/InAFlash/Me and Sis.jpeg",
  "img/InAFlash/ReTide (Flutter App) Presentation.jpeg",
  "img/InAFlash/Volunteering at PYI.jpeg",
  "img/InAFlash/Waterfall.jpeg",
  "img/InAFlash/Views2.jpg",
];

export default function InAFlash() {
  return (
    <main className="bg-[#09090B] flex-1 px-12 py-16">
      <h1 className="mb-3 text-4xl font-semibold">In A Flash</h1>
      <h2 className="mb-6 text-xl text-gray-600">
        A collection of precious photos and memories in my life.
      </h2>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry>
          {images.map((image, i) => (
            <img
              key={i}
              src={image}
              style={{ width: "100%", display: "block" }}
              alt=""
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </main>
  );
}
