import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { portfolioData } from "./data";

function App() {
  return (
    <div className="bg-background text-primary font-sans">
      <Header header={portfolioData.header} />
      <main className="mx-auto max-w-5xl px-4">
        <Hero hero={portfolioData.hero} />
        <About about={portfolioData.about} />
        <Skills skills={portfolioData.skills} />
        <Projects projects={portfolioData.projects} />
        <Contact contact={portfolioData.contact} />
      </main>
      <Footer footer={portfolioData.footer} />
    </div>
  );
}

export default App;
