// src/App.js
import React from 'react';
import Header from './components/Header';
import Features from './components/Features';
import Footer from './components/Footer';
import './styles.css';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default App;
