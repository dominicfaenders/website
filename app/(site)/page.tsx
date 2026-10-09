import AboutSection from "@/app/components/AboutSection";
import AppSection from "@/app/components/AppSection";
import BusinessAreas from "@/app/components/BusinessAreas";
import Hero from "@/app/components/Hero";
import KarriereSection from "@/app/components/KarriereSection";
import KontaktSection from "@/app/components/KontaktSection";
// CarePaketSection & AnkaufsprofilSection — vorerst ausgeblendet, Komponenten bleiben erhalten

export default function Home() {
  return (
    <main>
      <Hero />
      <BusinessAreas />
      <AppSection />
      <AboutSection />
      <KarriereSection />
      <KontaktSection />
    </main>
  );
}
