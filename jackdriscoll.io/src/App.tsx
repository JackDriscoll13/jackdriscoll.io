import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/header';
import Footer from './components/footer.tsx';
import About from './about.tsx';
import Projects from './projects.tsx';
import Ideas from './ideas.tsx';
import NietzscheQuote from './components/Nietzsche-labryinth.tsx';

function LoggerComponent() {
  // This compnenet logs the page view to the server, so I can track where users are navigating on the site
  const location = useLocation();

  useEffect(() => {
    // Log the page view
    fetch('/log-navigation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        path: location.pathname,
        timestamp: new Date().toISOString(),
      }),
    }).catch(error => console.error('Error logging navigation:', error));
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-light-bg">
        <LoggerComponent />
        <Header />
        <main className="mt-16 flex-grow">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/ideas" element={<Ideas />} />
            <Route path="/nietzsche-quote" element={<NietzscheQuote />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;