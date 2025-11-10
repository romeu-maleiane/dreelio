import AboutApp from "@/components/aboutApp";
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
        </div>
      </main>
  );
}
