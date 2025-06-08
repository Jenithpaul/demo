import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/services";
import About from "./components/aboutus";
import Contact from "./components/contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <Hero />
      <Services />
      <About />
      {/* Gallery section can be added here if needed */}
      <Contact />
      <Footer />
    </main>
  );
}
