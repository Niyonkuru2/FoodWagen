"use client";

import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { Food } from "@/types/food";
import { validateFoodForm } from "@/lib/validation";
import { addFood } from "@/services/api";
import toast from "react-hot-toast";

export function useFoodForm(onSuccess: () => void) {
  const queryClient = useQueryClient();

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<Partial<Food>>({
    food_name: "",
    food_rating: "",
    food_image: "",
    restaurant_name: "",
    restaurant_logo: "",
    restaurant_status: "Open Now",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    const validationErrors = validateFoodForm(form as any);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    try {
      setLoading(true);

      // Add new food with defaults
      await addFood({
        id: form.id ?? "",
        price: form.price ?? "0.00",
        food_name: form.food_name ?? "",
        food_rating: form.food_rating ?? "",
        food_image: form.food_image ?? "",
        restaurant_name: form.restaurant_name ?? "",
        restaurant_logo: form.restaurant_logo ?? "",
        restaurant_status: form.restaurant_status ?? "Open Now",
      });

      //Instantly refresh food list
      await queryClient.invalidateQueries({ queryKey: ["foods"] });

      // Reset form
      setForm({
        food_name: "",
        food_rating: "",
        food_image: "",
        restaurant_name: "",
        restaurant_logo: "",
        restaurant_status: "Open Now",
      });
      setErrors({});
      onSuccess();
      toast.success("Food added successfully");
    } catch (error) {
      console.error(error);
      toast.error("Error adding food. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return { form, errors, loading, handleChange, handleSubmit };
}
