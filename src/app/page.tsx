import Sidebar from "@/components/ui/Sidebar";
import { Home } from "@/components/ui/Home";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#09090B] font-sans">
      <div className="mx-auto flex max-w-7xl">
        <Sidebar />
        <Home />
        {/* <Experience />
        <Projects />
        <Contact /> */}
      </div>
    </div>
  );
}
