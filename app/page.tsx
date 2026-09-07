import { HeroSection } from "@/components/home/HeroSection";
import { SubstackSection } from "@/components/home/SubstackSection";
import { ProblemSection } from "@/components/home/ProblemSection";
import { PhilosophySection } from "@/components/home/PhilosophySection";
import { ThreePillarsSection } from "@/components/home/ThreePillarsSection";
import { ProfileSection } from "@/components/home/ProfileSection";
import { ServiceSection } from "@/components/home/ServiceSection";
import { CourseSection } from "@/components/home/CourseSection";
import { NotePostsSection } from "@/components/home/NotePostsSection";
import { ContactSection } from "@/components/home/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SubstackSection />
      <ProblemSection />
      <PhilosophySection />
      <ThreePillarsSection />
      <ProfileSection />
      <ServiceSection />
      <CourseSection />
      <NotePostsSection />
      <ContactSection />
    </>
  );
}
