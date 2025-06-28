"use client";

import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="top-0 fixed w-[100%] z-[1] bg-white">
      <div className="max-w-[1200px] m-auto text-xl">
        <div className="py-4 float-left">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:bg-gray-100 rounded-md transition-colors"
          >
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
        </div>
        <div className="float-right py-4">Mail</div>
        <div className="py-4 text-center">My Food</div>
      </div>

      {isMenuOpen && (
        <div className="bg-white w-[40%] z-[2] min-w-[300px] text-2xl block">
          <div className="px-4 py-2 space-y-1">
            <a
              href="#"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              Food
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              About
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
