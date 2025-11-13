import AboutApp from "@/components/aboutApp";
import Benefits from "@/components/benefits";
import Features from "@/components/features";
import Hero from "@/components/hero";
import LogosTicker from "@/components/logosTicker";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
      <main className={'flex flex-col gap-30'}>
        <Navbar />
        <Hero />
        <div className="content">
          <LogosTicker />
          <AboutApp />
          <Features />
          <Benefits />
        </div>
      </main>
  );
}
