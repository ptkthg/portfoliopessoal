import { useEffect, useState } from 'react';
import About from './components/About';
import Areas from './components/Areas';
import Arsenal from './components/Arsenal';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Differentials from './components/Differentials';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Methodology from './components/Methodology';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import { portfolioData } from './data/portfolioData';

export default function App() {
  const [showTop, setShowTop] = useState(false);
  const [hasResume, setHasResume] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    fetch(portfolioData.person.resumePath, { method: 'HEAD' })
      .then((r) => setHasResume(r.ok))
      .catch(() => setHasResume(false));
  }, []);

  return (
    <div className="min-h-screen bg-terminal text-textprimary">
      <Header />
      <main>
        <Hero person={portfolioData.person} hasResume={hasResume} />
        <About />
        <Areas areas={portfolioData.areas} />
        <Methodology
          methodology={portfolioData.methodology}
          methodologyText={portfolioData.methodologyText}
          frameworks={portfolioData.frameworks}
        />
        <Arsenal arsenal={portfolioData.arsenal} />
        <Timeline experiences={portfolioData.experiences} />
        <Skills />
        <Differentials differentials={portfolioData.differentials} />
        <Projects iocEnricher={portfolioData.blueTeamLab[0]} />
        <Certifications certifications={portfolioData.certifications} />
        <Contact person={portfolioData.person} />
      </main>
      <Footer />

      {showTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Voltar ao topo"
          className="fixed bottom-6 right-6 font-mono text-xs border border-neon/40 text-neon/70 px-3 py-2 bg-terminal hover:border-neon hover:text-neon transition-all duration-200"
        >
          ↑ top
        </button>
      )}
    </div>
  );
}
