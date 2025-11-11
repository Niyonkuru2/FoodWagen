import { Food } from "@/types/food";

const BASE_URL = "https://6852821e0594059b23cdd834.mockapi.io";

//Fetch all foods
export async function getFoods(): Promise<Food[]> {
  const res = await fetch(`${BASE_URL}/Food`);
  if (!res.ok) throw new Error("Failed to fetch foods");
  return res.json();
}

//Add a new food
export async function addFood(form: Food): Promise<Food> {
  const res = await fetch(`${BASE_URL}/Food`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });

  if (!res.ok) throw new Error("Failed to add food");
  return res.json();
}

//Delete food by ID
export async function deleteFood(id: string): Promise<void> {
  const res = await fetch(`${BASE_URL}/Food/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Failed to delete food");
}

// Update food by ID
export async function updateFood(id: string, form: Partial<Food>): Promise<Food> {
  const res = await fetch(`${BASE_URL}/Food/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });

  if (!res.ok) throw new Error("Failed to update food");
  return res.json();
}
