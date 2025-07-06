import React, { useState, useEffect } from 'react'
import './ScrollUp.css'

const ScrollUp = () => {
  const [showScrollUp, setShowScrollUp] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollUp(window.scrollY >= 560)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button 
      className={`scrollup ${showScrollUp ? 'show-scroll' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </button>
  )
}

export default ScrollUp