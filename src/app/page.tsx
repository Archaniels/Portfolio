import Sidebar from "@/components/ui/Sidebar";
import { MainContent } from "@/components/ui/MainContent";
import { Contact } from "@/components/ui/Contact";
import { Projects } from "@/components/ui/Projects";
import { Experience } from "@/components/ui/Experience";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#09090B] font-sans">
      <div className="mx-auto flex max-w-7xl">
        <Sidebar />
        <MainContent />
        {/* <Experience />
        <Projects />
        <Contact /> */}
      </div>
    </div>
  );
}
