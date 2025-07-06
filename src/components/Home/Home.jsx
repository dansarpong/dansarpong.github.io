import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Home.css'

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  const handleContactClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleScrollDown = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="home section" id="home">
      <motion.div 
        ref={ref}
        className="home__container container grid"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="home__content grid">
          <motion.div className="home__social" variants={itemVariants}>
            <a href="https://www.linkedin.com/in/dansarpong" target="_blank" rel="noopener noreferrer" className="home__social-icon">
              <i className="uil uil-linkedin-alt"></i>
            </a>
            <a href="https://github.com/dansarpong" target="_blank" rel="noopener noreferrer" className="home__social-icon">
              <i className="uil uil-github-alt"></i>
            </a>
          </motion.div>

          <motion.div className="home__img" variants={itemVariants}>
            <svg className="home__blob" viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0" maskType="alpha">
                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
              </mask>
              <g mask="url(#mask0)">
                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                <image className="home__blob-img" x="12" y="18" href="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300"/>
              </g>
            </svg>
          </motion.div>

          <motion.div className="home__data" variants={itemVariants}>
            <h1 className="home__title">Hi, I'm Daniel</h1>
            <h3 className="home__subtitle">Student</h3>
            <p className="home__description">
              Currently pursuing a Bachelor of Science degree in Computer Science at the University of Cape Coast.
              Interested in collaborating on projects and open to any suitable work
            </p>
            <button onClick={handleContactClick} className="button button--flex">
              Contact Me<i className="uil uil-message button__icon"></i>
            </button>
          </motion.div>
        </div>

        <motion.div className="home__scroll" variants={itemVariants}>
          <button onClick={handleScrollDown} className="home__scroll-button button--flex">
            <i className="uil uil-mouse-alt home__scroll-mouse"></i>
            <span className="home__scroll-name">Scroll Down</span>
            <i className="uil uil-arrow-down home__scroll-arrow"></i>
          </button>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Home