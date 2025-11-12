import Image from "next/image";
import SearchBar from "./SearchBar";
interface HeroSectionProps {
  onSearch: (query: string) => void;
}

export default function HeroSection({ onSearch }: HeroSectionProps) {
  return (
    <section
      className="w-full bg-yellow-400  py-16 px-6 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden"
      style={{ maxHeight: '400px' }} // controls max height of background
    >
      {/* Left side */}
      <div className="w-full md:w-1/2 max-w-lg flex flex-col justify-center text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
          Are you starving?
        </h1>
        <p className="text-yellow-100 mb-6 text-lg">
          Within a few clicks, find meals that are accessible near you
        </p>
        <SearchBar onSearch={onSearch} />
      </div>

      {/* Right side */}
      <div className="w-full md:w-1/2 relative flex justify-center ">
  <div className="relative w-80 h-80 md:w-[400px] md:h-[400px] top-4 md:top-8">
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
