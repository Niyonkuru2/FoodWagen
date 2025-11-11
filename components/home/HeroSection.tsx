import Image from "next/image";
import SearchBar from "./SearchBar";

export default function HeroSection() {
  return (
    <section className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 py-16 px-6 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
      {/* Left side */}
      <div className="w-full md:w-1/2 text-center md:text-left max-w-lg flex flex-col justify-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
          Are you starving?
        </h1>
        <p className="text-yellow-100 mb-6 text-lg">
          Within a few clicks, find meals that are accessible near you
        </p>
        <SearchBar />
      </div>

      {/* Right side */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
        <div className="relative w-80 h-80 md:w-[400px] md:h-[400px]">
          <Image
            src="/images/dish.png"
            alt="Delicious noodles dish"
            fill
            className="object-cover rounded-xl drop-shadow-2xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
