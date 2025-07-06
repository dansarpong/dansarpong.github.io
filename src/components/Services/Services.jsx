import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Services.css'

const Services = () => {
  const [activeModal, setActiveModal] = useState(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const servicesData = [
    {
      title: "Embedded Systems Engineering",
      icon: "uil-arrow",
      services: [
        "I design and develop specialized embedded hardware and software systems",
        "I optimize performance and ensure reliability of embedded systems.",
        "I provide troubleshooting and technical support for embedded systems"
      ]
    },
    {
      title: "Software Development",
      icon: "uil-spade",
      services: [
        "I develop custom software solutions.",
        "I conduct software testing and debugging",
        "I provide ongoing software maintenance and support"
      ]
    },
    {
      title: "AI/ML Engineering",
      icon: "uil-arrow",
      services: [
        "I develop machine learning models and algorithms.",
        "I implement AI solutions for various domains.",
        "I conduct data analysis and preprocessing for AI applications."
      ]
    }
  ]

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

  const openModal = (index) => {
    setActiveModal(index)
  }

  const closeModal = () => {
    setActiveModal(null)
  }

  return (
    <section className="services section" id="services">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h2 className="section__title" variants={itemVariants}>Services</motion.h2>
        <motion.span className="section__subtitle" variants={itemVariants}>What I Offer</motion.span>

        <div className="services__container container grid">
          {servicesData.map((service, index) => (
            <motion.div key={index} className="services__content" variants={itemVariants}>
              <div>
                <i className={`uil ${service.icon} services__icon`}></i>
                <h3 className="services__title">{service.title.split(' ').map((word, i) => (
                  <React.Fragment key={i}>
                    {word}
                    {i === 0 && <br />}
                    {i > 0 && i < service.title.split(' ').length - 1 && ' '}
                  </React.Fragment>
                ))}</h3>
              </div>

              <button 
                className="button button--flex button--small button--link services__button"
                onClick={() => openModal(index)}
              >
                View More
                <i className="uil uil-arrow-right button__icon"></i>
              </button>

              <div className={`services__modal ${activeModal === index ? 'active-modal' : ''}`}>
                <div className="services__modal-content">
                  <h4 className="services__modal-title">{service.title.split(' ').map((word, i) => (
                    <React.Fragment key={i}>
                      {word}
                      {i === 0 && <br />}
                      {i > 0 && i < service.title.split(' ').length - 1 && ' '}
                    </React.Fragment>
                  ))}</h4>
                  <button className="services__modal-close" onClick={closeModal}>
                    <i className="uil uil-times"></i>
                  </button>

                  <ul className="services__modal-services grid">
                    {service.services.map((serviceItem, serviceIndex) => (
                      <li key={serviceIndex} className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p>{serviceItem}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Services