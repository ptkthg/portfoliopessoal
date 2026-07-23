import About from '../components/About';
import CaseStudy from '../components/CaseStudy';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Resume from '../components/Resume';
import Skills from '../components/Skills';
import Timeline from '../components/Timeline';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Timeline />
      <Skills />
      <Projects />
      <CaseStudy />
      <Resume />
      <Contact />
    </>
  );
}
