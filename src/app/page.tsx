import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Tape from "@/sections/Tape";
import Acadamics from "@/sections/Acadamics";

export default function Home() {
  return (
   <div>
    <Header />
    <Hero/>
    <Projects/>
    <Tape/>
    <About/>
    <Acadamics/>
    <Contact/>
    <Footer/>
   </div>
  );
}
