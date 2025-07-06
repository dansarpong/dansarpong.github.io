import React from 'react'
import './Footer.css'

const Footer = () => {
  const handleNavClick = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div>
            <h1 className="footer__title">Sarpong</h1>
            <span className="footer__subtitle">Student</span>
          </div>

          <ul className="footer__links">
            <li>
              <button onClick={() => handleNavClick('services')} className="footer__link">
                Services
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('portfolio')} className="footer__link">
                Portfolio
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('contact')} className="footer__link">
                Contact Me
              </button>
            </li>
          </ul>

          <div className="footer__socials">
            <a href="https://twitter.com/thedannyjunior" target="_blank" rel="noopener noreferrer" className="footer__social">
              <i className="uil uil-twitter-alt"></i>
            </a>
            <a href="https://t.me/thedannyjunior" target="_blank" rel="noopener noreferrer" className="footer__social">
              <i className="uil uil-telegram-alt"></i>
            </a>
          </div>
        </div>
        <p className="footer__copy">&#169; Daniel Sarpong. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer