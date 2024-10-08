// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Blog from './pages/Blog';
import About from './pages/About';
import Links from './pages/Links';
import Article from './pages/Article';
import './index.css';

function App() {
  return (
    <Router>
      <div className="font-sans">
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/links" element={<Links />} />
          <Route path="/article/:id" element={<Article />} /> Dynamic route for articles
        </Routes>
      </div>
    </Router>
  );
}

export default App;