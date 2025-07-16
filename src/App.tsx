import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import BlogDetail from './components/BlogDetail';
import BlogPage from './components/BlogPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:id" element={<BlogDetail />} />
    </Routes>
  );
}

export default App;