"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import FoodCard from "./FoodCard";
import EditFoodModal from "@/components/modals/EditFoodModal";
import DeleteFoodModal from "@/components/modals/DeleteFoodModal";
import { updateFood, deleteFood } from "@/services/api";
import { Food } from "@/types/food";

export default function FeaturedMeals({ foods }: { foods: Food[] }) {
  const [visibleCount, setVisibleCount] = useState(8);
  const [selectedFood, setSelectedFood] = useState<Food | null>(null);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedFoodId, setSelectedFoodId] = useState<string | null>(null);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const queryClient = useQueryClient();

  const updateMutation = useMutation({
    mutationFn: ({ id, form }: { id: string; form: Partial<Food> }) =>
      updateFood(id, form),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["foods"] });
      setIsEditOpen(false);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteFood,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["foods"] });
      setIsDeleteOpen(false);
    },
  });

  const handleLoadMore = () => setVisibleCount((prev) => prev + 8);

  const handleEdit = (food: Food) => {
    setSelectedFood(food);
    setIsEditOpen(true);
  };

  const handleDelete = (id: string) => {
    setSelectedFoodId(id);
    setIsDeleteOpen(true);
  };

  // ✅ Normalize and enforce id presence
  const normalizedFoods: Food[] = foods.map((food, i) => ({
    ...food,
    id: food.id ?? `temp-${i}`, // ensure id always exists as string
    food_name: food.food_name || food.name || `Meal ${i + 1}`,
    food_rating: food.food_rating || food.rating || "N/A",
    food_image:
      food.food_image ||
      food.image ||
      "https://via.placeholder.com/300x200",
    restaurant_name:
      food.restaurant_name || food.restaurantName || "Unknown Restaurant",
    restaurant_logo: food.restaurant_logo || "https://via.placeholder.com/40",
    restaurant_status: food.restaurant_status || "Closed",
    price: food.price || (Math.floor(Math.random() * 20) + 5).toFixed(2),
  }));

  const visibleFoods = normalizedFoods.slice(0, visibleCount);

  return (
    <section className="py-12 px-6 max-w-6xl mx-auto relative">
      <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
        Featured Meals
      </h2>

      {normalizedFoods.length === 0 ? (
        <div className="text-center text-gray-500">No items available</div>
      ) : (
        <>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {visibleFoods.map((food, index) => (
              <FoodCard
                key={`${food.id}-${index}`}
                food={food}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </div>

          {visibleCount < normalizedFoods.length && (
            <div className="flex justify-center mt-10">
              <button
                onClick={handleLoadMore}
                className="flex items-center gap-2 bg-orange-500 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-orange-600 transition"
              >
                Load More <ChevronRight size={18} />
              </button>
            </div>
          )}
        </>
      )}

      {/* Edit Modal */}
      {selectedFood && (
        <EditFoodModal
       isOpen={isEditOpen}
       onClose={() => setIsEditOpen(false)}
      food={selectedFood}
     onUpdated={(formData: Partial<Food>) =>
    selectedFood?.id &&
    updateMutation.mutate({ id: selectedFood.id, form: formData })
  }
/>

      )}

      {/* Delete Modal */}
      {selectedFoodId && (
        <DeleteFoodModal
          isOpen={isDeleteOpen}
          onClose={() => setIsDeleteOpen(false)}
          foodId={selectedFoodId}
          onDeleted={() => deleteMutation.mutate(selectedFoodId)}
        />
      )}
    </section>
  );
}
