// Navigation Bar Reusable Component

import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <header className="fixed w-full z-20 top-0 start-0">
      {/* Top Nav */}
      <nav className="backdrop-blur-lg">
        <div className="flex flex-wrap justify-center items-center mx-auto max-w-screen-xl p-4">
          <a
            href="src/components/assets/img/A Primary.png"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="src/components/assets/img/A Primary.png"
              className="h-7"
              alt="Main Logo"
            />
          </a>
        </div>
      </nav>

      {/* Bottom Nav */}
      <nav className="backdrop-blur-lg border-y border-default">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center justify-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <Link href="/" className="text-heading hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-heading hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-heading hover:underline">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-heading hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
