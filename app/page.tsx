import { HeroSection } from "@/components/home/HeroSection";
import { ProfileSection } from "@/components/home/ProfileSection";
import { FeaturedPosts } from "@/components/home/FeaturedPosts";
import { SnsSection } from "@/components/home/SnsSection";
import { ContactSection } from "@/components/home/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProfileSection />
      <FeaturedPosts />
      <SnsSection />
      <ContactSection />
    </>
  );
}
