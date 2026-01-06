"use client";
import dynamic from "next/dynamic";
import WIP from "@/components/ui/WIP";

const InAFlash = dynamic(
  () => import("@/components/ui/InAFlash").then((mod) => mod.default),
  { ssr: false }
);

const Sidebar = dynamic(
  () => import("@/components/ui/Sidebar").then((mod) => mod.default),
  { ssr: false }
);

export default function InAFlashPage() {
  return (
    <div className="min-h-screen bg-[#09090B] font-sans">
      <div className="mx-auto flex flex-col md:flex-row max-w-7xl">
        <Sidebar />
        <WIP />
        {/* <InAFlash /> */}
      </div>
    </div>
  );
}
