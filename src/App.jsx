import Footer from "./components/footer";
import Header from "./components/Header";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-background text-primary font-sans">
      <Header />
      <main className="mx-auto max-w-5xl px-4">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
