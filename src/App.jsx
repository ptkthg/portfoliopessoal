import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import { IconSprite } from './components/Icon';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <IconSprite />
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projetos/:slug" element={<ProjectPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
