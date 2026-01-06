import { Home } from "@/components/ui/Home";
import Sidebar from "@/components/ui/Sidebar";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-[#09090B] font-sans">
            <div className="mx-auto flex flex-col md:flex-row max-w-7xl">
                <Sidebar />
                <Home />
            </div>
        </div>
    );
}