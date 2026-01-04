import Sidebar from "@/components/ui/Sidebar";
import { MainContent } from "@/components/ui/MainContent";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#09090B] font-sans">
      <div className="mx-auto flex max-w-7xl">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}
