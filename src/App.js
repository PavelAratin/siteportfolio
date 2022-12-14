import 'normalize.css';
import React from 'react';
import { useState } from 'react';
//components
import Footer from './components/Footer/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import MobileMenu from './components/MobileMenu';
import Projects from './components/Projects';

function App() {
  const [displayMobileMenu, setDisplayMobileMenu] = useState(false);
  const displayMobileMenuHandler = () => {
    setDisplayMobileMenu(!displayMobileMenu)
  }
  return (
    <div className="site-container">
      <Header displayMobileMenuHandler={displayMobileMenuHandler}></Header>
      <main>
        <Hero></Hero>
        <Projects></Projects>
      </main>
      <Footer></Footer>
      <MobileMenu displayMobileMenu={displayMobileMenu} displayMobileMenuHandler={displayMobileMenuHandler}></MobileMenu>
    </div>
  );
}

export default App;
