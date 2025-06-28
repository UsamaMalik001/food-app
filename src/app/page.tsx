import AboutSection from "@/components/About";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home({
  searchParams,
}: {
  searchParams?: { page?: string };
}) {
  return (
    <div>
      <Navbar />
      <HeroSection searchParams={searchParams} />
      <AboutSection />
      <Footer />
    </div>
  );
}
