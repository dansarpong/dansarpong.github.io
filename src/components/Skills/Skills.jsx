import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Skills.css'

const Skills = () => {
  const [openSkills, setOpenSkills] = useState({ 0: true })
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const skillsData = [
    {
      title: "Embedded Systems",
      subtitle: "Creating efficient computer systems for specific applications with constrained resources.",
      icon: "uil-channel",
      skills: [
        { name: "Electronics", percentage: 80 },
        { name: "Arduino", percentage: 80 },
        { name: "Raspberry Pi", percentage: 60 }
      ]
    },
    {
      title: "Software Development",
      subtitle: "Creating, designing, and implementing software applications for diverse user needs.",
      icon: "uil-game-structure",
      skills: [
        { name: "Python", percentage: 80 },
        { name: "C++", percentage: 70 },
        { name: "Java", percentage: 50 }
      ]
    },
    {
      title: "AI / Machine Learning",
      subtitle: "Developing intelligent systems that learn and make decisions autonomously.",
      icon: "uil-bullseye",
      skills: [
        { name: "Jupyter", percentage: 30 },
        { name: "TensorFlow", percentage: 5 },
        { name: "Keras", percentage: 1 }
      ]
    }
  ]

  const toggleSkill = (index) => {
    setOpenSkills(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

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
    <section className="skills section" id="skills">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h2 className="section__title" variants={itemVariants}>Skills</motion.h2>
        <motion.span className="section__subtitle" variants={itemVariants}>My Technical Level</motion.span>

        <div className="skills__container container grid">
          <div>
            {skillsData.map((skillGroup, index) => (
              <motion.div 
                key={index}
                className={`skills__content ${openSkills[index] ? 'skills__open' : 'skills__close'}`}
                variants={itemVariants}
              >
                <div className="skills__header" onClick={() => toggleSkill(index)}>
                  <i className={`uil ${skillGroup.icon} skills__icon`}></i>

                  <div>
                    <h1 className="skills__title">{skillGroup.title}</h1>
                    <span className="skills__subtitle">{skillGroup.subtitle}</span>
                  </div>

                  <i className="uil uil-angle-down skills__arrow"></i>
                </div>

                <div className="skills__list grid">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skills__data">
                      <div className="skills__titles">
                        <h3 className="skills__name">{skill.name}</h3>
                        <span className="skills__number">{skill.percentage}%</span>
                      </div>
                      <div className="skills__bar">
                        <span 
                          className="skills__percentage"
                          style={{ width: `${skill.percentage}%` }}
                        ></span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Skills