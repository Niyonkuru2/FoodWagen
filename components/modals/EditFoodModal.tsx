"use client";

import { useState } from "react";
import { Food } from "@/types/food";
import InputField from "@/components/ui/InputField";
import toast from "react-hot-toast";

interface EditFoodModalProps {
  isOpen: boolean;
  onClose: () => void;
  food: Food;
  loading?: boolean;
  onUpdated: (formData: Partial<Food>) => void;
}

export default function EditFoodModal({
  isOpen,
  onClose,
  food,
  loading = false,
  onUpdated,
}: EditFoodModalProps) {
  const [form, setForm] = useState<Food>(food);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!form.food_name) newErrors.food_name = "Food name is required";
    if (!form.food_image) newErrors.food_image = "Image URL is required";
    if (!form.restaurant_name) newErrors.restaurant_name = "Restaurant name is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    onUpdated(form);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100/60 z-50 animate-slide-up">
      <div className="bg-white rounded-2xl shadow-lg w-[90%] max-w-md p-6">
        <h2 className="text-2xl font-bold text-orange-500 mb-4 text-center">Edit Meal</h2>

        <form onSubmit={handleSubmit} className="space-y-4 text-gray-700 text-sm">
          <InputField id="food_name" name="food_name" value={form.food_name} onChange={handleChange} error={errors.food_name} />
          <InputField id="food_rating" name="food_rating" type="number" value={form.food_rating} onChange={handleChange} error={errors.food_rating} />
          <InputField id="food_image" name="food_image" value={form.food_image} onChange={handleChange} error={errors.food_image} />
          <InputField id="price" name="price" placeholder="Price" value={form.price} onChange={handleChange} error={errors.price} />
          <InputField id="restaurant_name" name="restaurant_name" value={form.restaurant_name} onChange={handleChange} error={errors.restaurant_name} />
          <InputField id="restaurant_logo" name="restaurant_logo" value={form.restaurant_logo} onChange={handleChange} error={errors.restaurant_logo} />

          {/* Restaurant Status */}
          <div>
            <label htmlFor="restaurant_status" className="block text-sm font-semibold mb-1">
              Restaurant status (open/close)
            </label>
            <select
              id="restaurant_status"
              name="restaurant_status"
              value={form.restaurant_status}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
            >
              <option value="Open Now">Open Now</option>
              <option value="Closed">Closed</option>
            </select>
            {errors.restaurant_status && (
              <p className="text-red-500 text-xs mt-1">{errors.restaurant_status}</p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-3 pt-3">
            <button
              type="submit"
              disabled={loading}
              className={`bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2 rounded-lg transition w-36 ${
                loading ? "opacity-70 cursor-not-allowed" : "cursor-pointer"
              }`}
            >
              {loading ? "Saving..." : "Save"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="border border-orange-500 text-gray-700 hover:bg-gray-100 font-semibold px-5 py-2 rounded-lg transition w-28 cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
