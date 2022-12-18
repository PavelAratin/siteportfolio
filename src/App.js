import 'normalize.css';
import './styles/index.scss';
import React from 'react';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
//components
import Footer from './components/Footer/Footer';
import Header from './components/Header';
import MobileMenu from './components/MobileMenu';
import Projects from './components/Projects';
import ContactsPages from './pages/ContactsPages';
import HomePage from './pages/HomePage';
import SkillsPages from './pages/SkillsPages/SkillsPages';

function App() {
  const [displayMobileMenu, setDisplayMobileMenu] = useState(false);
  const displayMobileMenuHandler = () => {
    setDisplayMobileMenu(!displayMobileMenu)
  }
  return (
    <div className="site-container">
      <Header displayMobileMenuHandler={displayMobileMenuHandler}></Header>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/projects' element={<Projects></Projects>}></Route>
        <Route path='/skills' element={<SkillsPages></SkillsPages>}></Route>
        <Route path='/contacts' element={<ContactsPages></ContactsPages>}></Route>
      </Routes>
      <Footer></Footer>
      <MobileMenu displayMobileMenu={displayMobileMenu} displayMobileMenuHandler={displayMobileMenuHandler}></MobileMenu>
    </div>
  );
}

export default App;
