import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/header';
import Footer from './components/footer.tsx';
import About from './about.tsx';
import Projects from './projects.tsx';
import Ideas from './ideas.tsx';
import NietzscheQuote from './components/Nietzsche-labryinth.tsx';
import NotFoundPage from './components/NotFoundPage';

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
      <LoggerComponent />
      <Routes>
        <Route path="/" element={<LayoutWithHeaderFooter><About /></LayoutWithHeaderFooter>} />
        <Route path="/about" element={<LayoutWithHeaderFooter><About /></LayoutWithHeaderFooter>} />
        <Route path="/projects" element={<LayoutWithHeaderFooter><Projects /></LayoutWithHeaderFooter>} />
        <Route path="/ideas" element={<LayoutWithHeaderFooter><Ideas /></LayoutWithHeaderFooter>} />
        <Route path="/nietzsche-quote" element={<LayoutWithHeaderFooter><NietzscheQuote /></LayoutWithHeaderFooter>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

function LayoutWithHeaderFooter({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-light-bg">
      <Header />
      <main className="mt-16 flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default App;