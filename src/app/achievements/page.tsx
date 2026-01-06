"use client";
import dynamic from "next/dynamic";
import { Achievements } from "@/components/ui/Achievements";

const Sidebar = dynamic(
  () => import("@/components/ui/Sidebar").then((mod) => mod.default),
  { ssr: false }
);

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-[#09090B] font-sans">
      <div className="mx-auto flex flex-col md:flex-row max-w-7xl">
        <Sidebar />
        <Achievements />
      </div>
    </div>
  );
}
