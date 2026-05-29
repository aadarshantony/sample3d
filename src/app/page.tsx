import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import FeaturesSection from "@/components/FeaturesSection";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030712] text-white">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
    </main>
  );
}