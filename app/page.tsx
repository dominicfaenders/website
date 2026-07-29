import AboutSection from "./components/AboutSection";
import AppSection from "./components/AppSection";
import BusinessAreas from "./components/BusinessAreas";
import Hero from "./components/Hero";
import KarriereSection from "./components/KarriereSection";
import KontaktSection from "./components/KontaktSection";
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
