"use client";

import { useFoodForm } from "@/hook/useFoodForm";
import InputField from "@/components/ui/InputField";

interface AddFoodModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddFoodModal({ isOpen, onClose }: AddFoodModalProps) {
  const { form, errors, loading, handleChange, handleSubmit } = useFoodForm(onClose);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100/50 z-50 animate-slide-up">
      <div className="bg-white rounded-2xl shadow-lg w-[90%] max-w-md p-6">
        <h2 className="text-2xl font-bold text-orange-500 mb-4 text-center">Add a Meal</h2>

        <form onSubmit={handleSubmit} className="space-y-4 text-gray-700 text-sm">
          <InputField id="food_name" name="food_name" label="Food Name" placeholder="Food Name" value={form.food_name ?? ""} onChange={handleChange} error={errors.food_name} />
          <InputField id="food_rating" name="food_rating" type="number" label="Food Rating" placeholder="Food Rating" value={form.food_rating ?? ""} onChange={handleChange} error={errors.food_rating} />
          <InputField id="food_image" name="food_image" label="Food Image URL" placeholder="Food Image (link)" value={form.food_image ?? ""} onChange={handleChange} error={errors.food_image} />
          <InputField id="restaurant_name" name="restaurant_name" label="Restaurant Name" placeholder="Restaurant Name" value={form.restaurant_name ?? ""} onChange={handleChange} error={errors.restaurant_name} />
          <InputField id="restaurant_logo" name="restaurant_logo" label="Restaurant Logo URL" placeholder="Restaurant Logo (link)" value={form.restaurant_logo ?? ""} onChange={handleChange} error={errors.restaurant_logo} />

          {/* Restaurant Status */}
          <div>
            <label htmlFor="restaurant_status" className="block text-sm font-semibold mb-1">
              Restaurant Status
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
              className={`bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2 rounded-lg transition w-36 cursor-pointer ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
            >
              {loading ? "Adding..." : "Add Food"}
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
