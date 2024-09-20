import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import About from './about.tsx';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<h1>Projects</h1>} />
            <Route path="/ideas" element={<h1>Ideas</h1>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;