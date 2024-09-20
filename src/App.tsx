import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<h1>About</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/projects" element={<h1>Projects</h1>} />
        <Route path="/ideas" element={<h1>Ideas</h1>} />
      </Routes>
    </Router>
  );
}

export default App;