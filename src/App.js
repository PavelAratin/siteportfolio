import 'normalize.css';
import React from 'react';

//components
import Footer from './components/Footer/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import MobileMenu from './components/MobileMenu';
import Projects from './components/Projects';

function App() {
  return (
    <div className="site-container">
      <Header></Header>
      <main>
        <Hero></Hero>
        <Projects></Projects>
      </main>
      <Footer></Footer>
      <MobileMenu></MobileMenu>
    </div>
  );
}

export default App;
