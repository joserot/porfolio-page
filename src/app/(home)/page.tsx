import Header from "@/components/header";
import Hero from "./components/hero";
import Footer from "@/components/footer";
import Projects from "./components/projects";
import Experience from "./components/experience";
import Education from "./components/education";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Experience />
      <Education />
      <Projects />
      <Footer />
    </main>
  );
}
