import { Projects } from "@/components/ui/Projects";
import Sidebar from "@/components/ui/Sidebar";

export default function ProjectPage() {
    return (
        <div className="min-h-screen bg-[#09090B] font-sans">
            <div className="mx-auto flex max-w-7xl">
                <Sidebar />
                <Projects />
            </div>
        </div>
    );
}