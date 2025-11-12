import { useState } from "react";
import { Food } from "@/types/food";
import { validateFoodForm } from "@/lib/validation";
import { addFood } from "@/services/api";
import toast from "react-hot-toast";

export function useFoodForm(onSuccess: () => void) {
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ Pass form as Partial<Food> to validation
    const validationErrors = validateFoodForm(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    try {
      setLoading(true);

      //  Provide defaults for required fields when sending to addFood
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
