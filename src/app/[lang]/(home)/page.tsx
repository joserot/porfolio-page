import Header from "@/components/header";
import Hero from "./components/hero";
import Footer from "@/components/footer";
import Projects from "./components/projects";
import Experience from "./components/experience";
import Education from "./components/education";
import Technologies from "./components/technoligies";

interface Props {
  params: { lang: Lang };
}

export default function Home({ params: { lang } }: Props) {
  return (
    <main className="dark:bg-slate-800">
      <Header lang={lang} />
      <Hero lang={lang} />
      <Experience lang={lang} />
      <Education lang={lang} />
      <Projects lang={lang} />
      <Technologies lang={lang} />
      <Footer lang={lang} />
    </main>
  );
}
