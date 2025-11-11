"use client";

import { Store} from "lucide-react";
import AddFoodModal from "../modals/AddFoodModal";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between bg-white shadow-sm px-6 md:px-16 py-3">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div className="bg-gradient-to-r from-orange-400 to-yellow-500 p-2 rounded-full text-white">
          <Store className="w-5 h-5" />
        </div>
        <span className="font-bold text-xl">
          <span className="text-orange-500">Food</span>
          <span className="text-yellow-500">Wagen</span>
        </span>
      </div>

      {/* Button */}
      <button
        onClick={() => setOpen(true)}
        className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold px-5 py-2 rounded-md shadow-md hover:shadow-lg hover:opacity-90 transition cursor-pointer"
      >
        Add Meal
      </button>
       <AddFoodModal isOpen={open} onClose={() => setOpen(false)} />
    </nav>
  );
}
