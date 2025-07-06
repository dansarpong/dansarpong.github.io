import React, { useState } from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import { useScrollHeader } from '../../hooks/useScrollHeader'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isDarkTheme, toggleTheme } = useTheme()
  const activeSection = useScrollSpy(['home', 'about', 'skills', 'services', 'portfolio', 'contact'])
  const isScrolled = useScrollHeader()

  const navItems = [
    { id: 'home', label: 'Home', icon: 'uil-estate' },
    { id: 'about', label: 'About', icon: 'uil-user' },
    { id: 'skills', label: 'Skills', icon: 'uil-file-alt' },
    { id: 'services', label: 'Services', icon: 'uil-briefcase-alt' },
    { id: 'portfolio', label: 'Portfolio', icon: 'uil-scenery' },
    { id: 'contact', label: 'Contact', icon: 'uil-message' }
  ]

  const handleNavClick = (sectionId) => {
    setIsMenuOpen(false)
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`header ${isScrolled ? 'scroll-header' : ''}`} id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">Dansarpong</a>

        <div className={`nav__menu ${isMenuOpen ? 'show-menu' : ''}`} id="nav-menu">
          <ul className="nav__list grid">
            {navItems.map((item) => (
              <li key={item.id} className="nav__item">
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`nav__link ${activeSection === item.id ? 'active-link' : ''}`}
                >
                  <i className={`uil ${item.icon} nav__icon`}></i> {item.label}
                </button>
              </li>
            ))}
          </ul>
          <button 
            className="nav__close"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <i className="uil uil-times"></i>
          </button>
        </div>

        <div className="nav__btns">
          <button 
            className="change-theme"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <i className={`uil ${isDarkTheme ? 'uil-sun' : 'uil-moon'}`}></i>
          </button>

          <button 
            className="nav__toggle"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <i className="uil uil-apps"></i>
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header