import About from "./Components/about";
import Contact from "./Components/contact";
import Hero from "./Components/hero";
import Projects from "./Components/projects";
import Skills from "./Components/skill";


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

