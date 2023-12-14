import Pricing from "@/components/main/Pricing";
import Hero from "@/components/main/Hero";
import FeaturedBot from "@/components/main/FeaturedBot";
import Services from "@/components/main/Services";
import AboutUs from "@/components/main/AboutUs";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Services />
        <Pricing />
        <AboutUs />
        <FeaturedBot />
      </div>
    </main>
  );
}
