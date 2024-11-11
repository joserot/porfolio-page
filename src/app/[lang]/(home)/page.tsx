import Header from "@/components/header";
import Hero from "./components/hero";
import Footer from "@/components/footer";
import Projects from "./components/projects";
import Experience from "./components/experience";
import Education from "./components/education";
import Technologies from "./components/technoligies";
import { Suspense } from "react";

type Params = Promise<{ lang: Lang }>;

export default async function Home(props: { params: Params }) {
  const params = await props.params;
  const lang: Lang = params.lang;

  return (
    <main className="dark:bg-slate-800">
      <Suspense key={lang} fallback={<div>Loading...</div>}>
        <Header lang={lang} />
      </Suspense>
      <Hero lang={lang} />
      <Experience lang={lang} />
      <Education lang={lang} />
      <Suspense key={lang}>
        <Projects lang={lang} />
      </Suspense>
      <Technologies lang={lang} />
      <Footer lang={lang} />
    </main>
  );
}
