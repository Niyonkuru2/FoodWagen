"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import HeroSection from "@/components/home/HeroSection";
import FeaturedMeals from "@/components/home/FeaturedMeals";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import { getFoods } from "@/services/api";
import { Food } from "@/types/food";

export default function Home() {
  const { data, isLoading, isError } = useQuery<Food[]>({
    queryKey: ["foods"],
    queryFn: getFoods,
  });

  const [searchQuery, setSearchQuery] = useState("");

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen text-gray-500">
        Loading meals...
      </div>
    );

  if (isError)
    return (
      <div className="flex items-center justify-center h-screen text-red-500">
        Failed to load meals.
      </div>
    );

  const filteredFoods =
    data?.filter(
      (food) =>
        food.food_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        food.restaurant_name?.toLowerCase().includes(searchQuery.toLowerCase())
    ) || [];

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroSection onSearch={setSearchQuery} />
      <FeaturedMeals foods={filteredFoods} />
      <Footer />
    </main>
  );
}
