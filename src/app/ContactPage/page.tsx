import { Contact } from "@/components/ui/Contact";
import Sidebar from "@/components/ui/Sidebar";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-[#09090B] font-sans">
            <div className="mx-auto flex max-w-7xl">
                <Sidebar />
                <Contact />
            </div>
        </div>
    );
}