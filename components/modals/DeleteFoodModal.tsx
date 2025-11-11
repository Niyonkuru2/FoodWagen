"use client";

import { useState } from "react";
import { deleteFood } from "@/services/api";
import toast from "react-hot-toast";

interface DeleteFoodModalProps {
  isOpen: boolean;
  onClose: () => void;
  foodId: string;
  onDeleted: () => void;
}

export default function DeleteFoodModal({ isOpen, onClose, foodId, onDeleted }: DeleteFoodModalProps) {
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleDelete = async () => {
    try {
      setLoading(true);
      await deleteFood(foodId);
      toast.success("Food deleted successfully");
      onDeleted(); // refresh the food list
      onClose();
    } catch (err) {
      toast.error("Failed to delete food");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100/60 z-50 animate-slide-up">
      <div className="bg-white rounded-2xl shadow-lg w-[90%] max-w-sm p-6 text-center">
        <h2 className="text-2xl font-bold text-orange-500 mb-3">Delete Meal</h2>
        <p className="text-gray-600 mb-6">
          Are you sure you want to delete this meal? <br /> Actions cannot be reversed.
        </p>

        <div className="flex justify-center gap-3">
          <button
            onClick={handleDelete}
            disabled={loading}
            className={`bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg transition w-36 cursor-pointer ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
          >
            {loading ? "Deleting..." : "Yes"}
          </button>
          <button
            onClick={onClose}
            className="border border-orange-500 text-gray-700 hover:bg-gray-100 font-semibold px-6 py-2 rounded-lg transition w-28 cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
