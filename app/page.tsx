"use client";

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

  if (isLoading)
    return <div className="flex items-center justify-center h-screen text-gray-500">Loading meals...</div>;
  if (isError)
    return <div className="flex items-center justify-center h-screen text-red-500">Failed to load meals.</div>;

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroSection />
      <FeaturedMeals foods={data || []} />
      <Footer />
    </main>
  );
}
