// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
// import Blog from './pages/Blog';
import About from './pages/About';
import Links from './pages/Links';
import './index.css';

function App() {
  return (
    <Router>
      <div className="font-sans">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/blog" element={<Blog />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/links" element={<Links />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;