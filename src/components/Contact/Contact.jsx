import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  })
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You can integrate with a form service like Formspree, EmailJS, etc.
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
    <section className="contact section" id="contact">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h2 className="section__title" variants={itemVariants}>Contact Me</motion.h2>
        <motion.span className="section__subtitle" variants={itemVariants}>Get in touch</motion.span>

        <div className="contact__container container grid">
          <motion.div variants={itemVariants}>
            <div className="contact__information">
              <i className="uil uil-phone contact__icon"></i>
              <div>
                <h3 className="contact__title">Call Me</h3>
                <span className="contact__subtitle">+233593385573</span>
              </div>
            </div>

            <div className="contact__information">
              <i className="uil uil-envelope contact__icon"></i>
              <div>
                <h3 className="contact__title">Email</h3>
                <span className="contact__subtitle">dansarpong.me@gmail.com</span>
              </div>
            </div>

            <div className="contact__information">
              <i className="uil uil-map-marker contact__icon"></i>
              <div>
                <h3 className="contact__title">Location</h3>
                <span className="contact__subtitle">Ghana</span>
              </div>
            </div>
          </motion.div>

          <motion.form onSubmit={handleSubmit} className="contact__form grid" variants={itemVariants}>
            <div className="contact__inputs grid">
              <div className="contact__content">
                <label htmlFor="name" className="contact__label">Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="contact__input"
                  required
                />
              </div>
              <div className="contact__content">
                <label htmlFor="email" className="contact__label">Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="contact__input"
                  required
                />
              </div>
            </div>
            <div className="contact__content">
              <label htmlFor="project" className="contact__label">Project</label>
              <input 
                type="text" 
                id="project"
                name="project"
                value={formData.project}
                onChange={handleInputChange}
                className="contact__input"
              />
            </div>
            <div className="contact__content">
              <label htmlFor="message" className="contact__label">Message</label>
              <textarea 
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                cols="0" 
                rows="7" 
                className="contact__input"
                required
              ></textarea>
            </div>

            <div>
              <button type="submit" className="button button--flex">
                Send Message
                <i className="uil uil-message button__icon"></i>
              </button>
            </div>
          </motion.form>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact