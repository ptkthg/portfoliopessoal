import { useEffect, useState } from 'react';
import About from './components/About';
import Areas from './components/Areas';
import CaseStudy from './components/CaseStudy';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Differentials from './components/Differentials';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import { portfolioData } from './data/portfolioData';

// Nota: Methodology e Arsenal (lado ofensivo/Kali) foram retirados do fluxo
// principal para enxugar a navegação. Os componentes e dados continuam no
// repo — basta reimportar e renderizar para reativá-los.

export default function App() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-terminal text-textprimary">
      <Header />
      <main>
        <Hero
          name={portfolioData.person.firstName}
          role={portfolioData.person.role}
          tagline={portfolioData.heroTagline}
          stats={portfolioData.heroStats}
          areas={portfolioData.heroAreas}
          resumePath={portfolioData.person.resumePath}
          imagePath={portfolioData.person.profileImagePath}
          imageAlt={portfolioData.person.profileImageAlt}
          imagePosition={portfolioData.person.profileImagePosition}
        />
        <About />
        <Areas areas={portfolioData.areas} />
        <Skills />
        <Differentials
          differentials={portfolioData.differentials}
          developing={portfolioData.developing}
        />
        <Projects projects={portfolioData.projects} />
        <CaseStudy caseStudy={portfolioData.caseStudy} />
        <Timeline experiences={portfolioData.experiences} />
        <Certifications certifications={portfolioData.certifications} />
        <Contact person={portfolioData.person} whatISeek={portfolioData.whatISeek} />
      </main>
      <Footer />

      {showTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Voltar ao topo"
          className="tap fixed bottom-5 right-5 z-40 border border-neon/40 bg-terminal/95 font-mono text-xs text-neon/70 backdrop-blur-sm transition-all duration-200 hover:border-neon hover:text-neon"
        >
          ↑
        </button>
      )}
    </div>
  );
}
