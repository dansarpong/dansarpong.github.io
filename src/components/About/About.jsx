import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './About.css'

const About = () => {
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
    <section className="about section" id="about">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h2 className="section__title" variants={itemVariants}>About Me</motion.h2>
        <motion.span className="section__subtitle" variants={itemVariants}>My Introduction</motion.span>

        <div className="about__container container grid">
          <motion.img 
            src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400" 
            alt="About me" 
            className="about__img"
            variants={itemVariants}
          />

          <motion.div className="about__data" variants={itemVariants}>
            <p className="about__description">
              Motivated student working toward a Bachelor of Science degree in Computer Science with
              proficiency in several programming languages such as Python and C++. Hardworking and
              resourceful individual eager to apply knowledge of project coordination and completion to
              achieve company goals. Dedicated to working hard to make positive contributions and
              expanding work experience
            </p>

            <div className="about__info">
              <div>
                <span className="about__info-title">&lt;1</span>
                <span className="about__info-name">Years <br /> experience</span>
              </div>

              <div>
                <span className="about__info-title">10+</span>
                <span className="about__info-name">Completed <br /> project</span>
              </div>
              
              <div>
                <span className="about__info-title">1&gt;</span>
                <span className="about__info-name">Companies <br /> worked</span>
              </div>
            </div>

            <div className="about__buttons">
              <a 
                download="" 
                href="/assets/pdf/dansarpong-cv.pdf" 
                className="button button--flex"
              >
                Download CV<i className="uil uil-download-alt button__icon"></i>
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default About