"use client";

import { useState } from "react";
import { MoreVertical, Star, Tags } from "lucide-react";
import { Food } from "@/types/food";

interface FoodCardProps {
  food: Food;
  onEdit?: (food: Food) => void;
  onDelete?: (id: string) => void;
}

export default function FoodCard({ food, onEdit, onDelete }: FoodCardProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const image = food.food_image || "https://via.placeholder.com/300x200";
  const price = food.price || "0.00";
  const rating = food.food_rating || "N/A";
  const restaurantName = food.restaurant_name || "Unknown Restaurant";
  const restaurantLogo = food.restaurant_logo || "https://via.placeholder.com/40";
  const status = food.open ? "Open" : food.restaurant_status || "Closed";
  const isOpen = status.toLowerCase().includes("open");

  return (
    <div className="relative bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
      {/* Food Image + Price Tag */}
      <div className="relative">
        <img
          src={image}
          alt={restaurantName}
          className="w-full h-44 object-cover"
          loading="lazy"
        />

        <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-lg flex items-center gap-1 shadow-sm">
          <Tags size={14} className="text-white" />
          ${price}
        </span>
      </div>

      {/* Card Content */}
      <div className="p-4">
        {/* Restaurant Info + Menu */}
        <div className="flex items-center justify-between mb-2 relative">
          <div className="flex items-center gap-2">
            <img
              src={restaurantLogo}
              alt={restaurantName}
              className="w-5 h-5 rounded-md"
              loading="lazy"
            />
            <p className="text-sm font-semibold text-gray-700 truncate max-w-[130px]">
              {restaurantName}
            </p>
          </div>

          {/* Dropdown Menu */}
          <div className="relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-1 hover:bg-gray-100 rounded-md"
            >
              <MoreVertical size={16} className="text-gray-500" />
            </button>

            {menuOpen && (
              <div className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg w-28 z-10">
                <button
                  onClick={() => onEdit?.(food)}
                  className="flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete?.(food.id)}
                  className="flex items-center gap-2 w-full px-3 py-2 text-sm text-red-600 hover:bg-gray-100"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Food Name */}
        <h3 className="text-base font-semibold text-gray-800 leading-tight mb-1">
          {food.food_name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-500 font-medium text-sm mb-3">
          <Star size={14} className="fill-yellow-400 text-yellow-400" />
          {rating}
        </div>

        {/* Status */}
        <span
          className={`text-xs font-semibold px-3 py-1 rounded-full ${
            isOpen ? "bg-gray-300 text-green-700" : "bg-red-50 text-red-500"
          }`}
        >
          {status}
        </span>
      </div>
    </div>
  );
}
