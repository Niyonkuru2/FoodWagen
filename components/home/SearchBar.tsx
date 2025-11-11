"use client";

import { useState } from "react";
import { Search, Bike, ShoppingBag } from "lucide-react";

export default function SearchBar() {
  const [type, setType] = useState<"delivery" | "pickup">("delivery");
  const [search, setSearch] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Searching for "${search}" with ${type} mode`);
  };

  return (
    
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-2xl p-4">
        {/* Delivery / Pickup Toggle */}
        <div className="flex items-center justify-start border-b border-gray-200 pb-3 mb-4 gap-2">
          <button
            type="button"
            onClick={() => setType("delivery")}
            className={`flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg transition-all ${
              type === "delivery"
                ? "bg-orange-100 text-orange-600"
                : "text-gray-600 hover:text-orange-500"
            }`}
          >
            <Bike size={16} /> Delivery
          </button>
          <button
            type="button"
            onClick={() => setType("pickup")}
            className={`flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg transition-all ${
              type === "pickup"
                ? "bg-orange-100 text-orange-600"
                : "text-gray-600 hover:text-orange-500"
            }`}
          >
            <ShoppingBag size={16} /> Pickup
          </button>
        </div>

        {/* Search Input */}
        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-between gap-3"
        >
          <div className="flex items-center w-full bg-gray-50 rounded-lg px-3 py-2">
            <Search className="text-gray-400" size={18} />
            <input
              type="text"
              placeholder="What do you like to eat today?"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="ml-2 w-full bg-transparent outline-none text-sm text-gray-800 placeholder-gray-500"
            />
          </div>

          <button
            type="submit"
             className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm px-6 py-2.5 rounded-lg flex items-center justify-center gap-2 whitespace-nowrap transition"
          >
            <Search size={16} /> Find Meal
          </button>
        </form>
      </div>
    
  );
}
