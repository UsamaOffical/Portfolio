import About from "./components/";
import Contact from "./components/contact";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Skills from "./components/skill";


export default function Home() {
  return (
     <div >
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      
     </div>
  );
}

