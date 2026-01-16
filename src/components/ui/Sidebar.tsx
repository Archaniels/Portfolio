import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <>
      {/* Mobile Header (Visible only on small screens) */}
      <div className="md:hidden bg-[#09090B] p-6 border-b border-zinc-800 sticky top-0 z-50">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold text-white">Daniyal Arshaq</h1>
          {/* You can add a hamburger menu button here later for a drawer */}
        </div>
        <nav className="flex gap-4 mt-4 overflow-x-auto text-sm text-gray-400">
          <Link href="/" className="hover:text-white">Home</Link>
          <Link href="/experience" className="hover:text-white">Experience</Link>
          <Link href="/projects" className="hover:text-white">Projects</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
        </nav>
      </div>

      {/* Desktop Sidebar (Hidden on mobile, block on md+) */}
      <aside className="hidden md:block bg-[#09090B] sticky top-0 h-screen w-80 border-r border-zinc-800 ml-[-5rem] py-16">
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-5xl font-semibold">Daniyal Arshaq Sudrajat</h1>
            <p className="mt-2 text-2xl text-gray-400">Software Engineer</p>
            <p className="text-2xl text-gray-600">Indonesia</p>
          </div>

          <nav className="mt-10 flex flex-col gap-4 text-3xl">
            {/* ... keep your existing desktop links here ... */}
            <section id="home">
              <Link href="/" className="font-semibold text-[rgb(51,65,85)] hover:text-[rgb(100,116,139)]">~ Home</Link>
            </section>
            <section id="experience">
              <a href="/experience" className="font-semibold text-[rgb(51,65,85)] hover:text-[rgb(100,116,139)]">~ Experience</a>
            </section>
            <section id="projects">
              <a href="/projects" className="font-semibold text-[rgb(51,65,85)] hover:text-[rgb(100,116,139)]">~ Projects</a>
            </section>
            <section id="contact">
              <a href="/contact" className="font-semibold text-[rgb(51,65,85)] hover:text-[rgb(100,116,139)]">~ Contact</a>
            </section>
            {/* <section id="inaflash">
              <a href="/inaflash" className="font-semibold text-[rgb(51,65,85)] hover:text-[rgb(100,116,139)]">~ In A Flash</a>
            </section> */}
          </nav>

          <a href="https://github.com/Archaniels" target="_blank" className="mt-10 flex items-center gap-5 font-semibold text-3xl text-[rgb(51,65,85)] hover:text-[rgb(100,116,139)]">
            <Image className="w-7 h-7" src="/icons/Octicons-mark-github.svg" alt="GitHub" width={24} height={24} />
            Archaniels
          </a>
        </div>
      </aside>
    </>
  );
}
