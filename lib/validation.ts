import { Food } from "@/types/food";

export function validateFoodForm(form: Food): Record<string, string> {
  const errors: Record<string, string> = {};

  if (!form.food_name.trim())
    errors["food_name"] = "Food Name is required";

  const rating = Number(form.food_rating);
  if (!rating || rating < 1 || rating > 5)
    errors["food_rating"] = "Food Rating must be between 1 and 5";

  if (!form.food_image.trim())
    errors["food_image"] = "Food Image URL is required";

  if (!form.restaurant_name.trim())
    errors["restaurant_name"] = "Restaurant Name is required";

  if (!form.restaurant_logo.trim())
    errors["restaurant_logo"] = "Restaurant Logo URL is required";

  if (!["Open Now", "Closed"].includes(form.restaurant_status))
    errors["restaurant_status"] =
      "Restaurant Status must be 'Open Now' or 'Closed'";

  return errors;
}
