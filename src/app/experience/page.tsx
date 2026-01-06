import { Experience } from "@/components/ui/Experience";
import Sidebar from "@/components/ui/Sidebar";

export default function ExperiencePage() {
    return (
        <div className="min-h-screen bg-[#09090B] font-sans">
            <div className="mx-auto flex flex-col md:flex-row max-w-7xl">
                <Sidebar />
                <Experience />
            </div>
        </div>
    );
}