import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Qualification.css'

const Qualification = () => {
  const [activeTab, setActiveTab] = useState('education')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section className="qualification section">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h2 className="section__title" variants={itemVariants}>Qualification</motion.h2>
        <motion.span className="section__subtitle" variants={itemVariants}>My Personal Journey</motion.span>

        <div className="qualification__container container">
          <motion.div className="qualification__tabs" variants={itemVariants}>
            <button 
              className={`qualification__button button--flex ${activeTab === 'education' ? 'qualification__active' : ''}`}
              onClick={() => setActiveTab('education')}
            >
              <i className="uil uil-graduation-cap qualification__icon"></i>
              Education
            </button>

            <button 
              className={`qualification__button button--flex ${activeTab === 'work' ? 'qualification__active' : ''}`}
              onClick={() => setActiveTab('work')}
            >
              <i className="uil uil-briefcase-alt qualification__icon"></i>
              Work
            </button>
          </motion.div>

          <div className="qualification__sections">
            <motion.div 
              className={`qualification__content ${activeTab === 'education' ? 'qualification__active' : ''}`}
              variants={itemVariants}
            >
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                </div>
                <div>
                  <h3 className="qualification__title">(B.Sc) Computer Science</h3>
                  <span className="qualification__subtitle">University of Cape Coast</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    2020 - Present
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className={`qualification__content ${activeTab === 'work' ? 'qualification__active' : ''}`}
              variants={itemVariants}
            >
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Unknown</h3>
                  <span className="qualification__subtitle">Place Unknown</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    Yet to be rectified
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Qualification