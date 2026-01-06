"use client";
import dynamic from "next/dynamic";
import { VolunteeringAndOrganizations } from "@/components/ui/VolunteeringAndOrganizations";

const Sidebar = dynamic(
  () => import("@/components/ui/Sidebar").then((mod) => mod.default),
  { ssr: false }
);

export default function VolunteeringAndOrganizationsPage() {
  return (
    <div className="min-h-screen bg-[#09090B] font-sans">
      <div className="mx-auto flex flex-col md:flex-row max-w-7xl">
        <Sidebar />
        <VolunteeringAndOrganizations />
      </div>
    </div>
  );
}
