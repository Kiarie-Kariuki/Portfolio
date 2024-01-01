import collins from '../Images/collins.JPG';
import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {FaBars, FaTimes} from "react-icons/fa";

console.log(collins);

function Navbar() {
  const navRef = useRef();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [scrollToContact, setScrollToContact] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        const scrollingDown = currentScrollPos > prevScrollPos;
        const scrollingUp = currentScrollPos < prevScrollPos;
      
        if (scrollingDown) {
          setVisible(false);
        } else if (scrollingUp && currentScrollPos < 460) {
          setVisible(true);
        }
      
        setPrevScrollPos(currentScrollPos);
      };
      

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  useEffect(() => {
    if (scrollToContact) {
      const contactElement = document.getElementById('contact');
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'auto' });
        setScrollToContact(false);
      }
    }
  }, [scrollToContact]);

  const handleHireButtonClick = () => {
    console.log('Hire button clicked');
    setScrollToContact(true);
  };

  const openPdfInNewTab = () => {
    // Replace with the actual hosted path to PDF file
    const pdfUrl = '';

    // Open the PDF in a new tab
    window.open(pdfUrl, '_blank');
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  };

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav"); 
  }

  return (
    <div className='NavbarContainer' id='portfolio'>
      <div className={`Navbar ${visible ? '' : 'scrolled'}`} id='navbar'>
        <div className='portfolio' onClick={() => scrollToSection('portfolio')}>
          <h2>PORTFOLIO</h2>
        </div>
        <div className='nav-icons' ref={navRef}>
          <ul className='icon' >
            <li onClick={() => scrollToSection('about')}> ABOUT</li>
            <li onClick={() => scrollToSection('skill')}>SKILL</li>
            <li onClick={() => scrollToSection('experience')}>EXPERIENCE</li>
            <li onClick={() => scrollToSection('contact')}>CONTACT</li>
            
          </ul>
          <button className='nav-btn'  onClick={showNavbar} >
            <FaBars />
          </button>
        </div>
      </div>
      <div className='Photocard'>
        <img className='photo' src={collins} alt='Collins' />
      </div>
      <div className='intro'>
        <h1 className='name'>Collins K. Kiarie</h1>
        <h3 className='info'>SOFTWARE ENGINEER, FULLSTACK DEVELOPER</h3>
      </div>
      <div className='buttons'>
        <div className='cvButton'>
          <button
            className='btn btn-primary cv'
            onClick={openPdfInNewTab}
          >
            View My CV
          </button>
        </div>
        <div className='hireButton'>
          <button
            className='btn btn-primary hire'
            onClick={handleHireButtonClick}
          >
            Hire Me
          </button>
        </div>
      </div>
      <div className='share'>
        <ul className='icons'>
          <li>
            <a
              className='btn btn-default btn-round btn-lg btn-icon'
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.linkedin.com/in/collins-kiarie'
              title='Follow me on LinkedIn'
              data-original-title='Follow me on LinkedIn'
            >
              <FontAwesomeIcon icon={faLinkedin} size='2x' />
            </a>
          </li>
          <li>
            <a
              className='btn btn-default btn-round btn-lg btn-icon'
              href='https://github.com/Kiarie-Kariuki'
              target='_blank'
              rel='noopener noreferrer'
              title='Check me out on Github'
              data-original-title='Check me out on Github'
            >
              <FontAwesomeIcon icon={faGithub} size='2x' />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
