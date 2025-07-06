import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './Portfolio.css'

const Portfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const portfolioData = [
    {
      title: "Learning Timer",
      description: "A personal project (in development) that adopts Pomodoro's Technique to enhance studies.",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400",
      link: "https://github.com/dansarpong/Learning-Timer",
      buttonText: "Code"
    },
    {
      title: "Student Attendance Checker",
      description: "An embedded systems group project for checking attendance of students in an educational institution.",
      image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400",
      link: "#",
      buttonText: "Repo"
    },
    {
      title: "Kasakasa",
      description: "(Private, In Development - For The AMCO Foundation) Machine translation toolkit for creating speech to text and text to speech components for indigenous languages.",
      image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=400",
      link: null,
      buttonText: null
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

  return (
    <section className="portfolio section" id="portfolio">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h2 className="section__title" variants={itemVariants}>Portfolio</motion.h2>
        <motion.span className="section__subtitle" variants={itemVariants}>Most recent work</motion.span>
        
        <motion.div className="portfolio__container container" variants={itemVariants}>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{
              el: '.swiper-pagination',
              clickable: true,
            }}
            loop={true}
            className="portfolio__swiper"
          >
            {portfolioData.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="portfolio__content grid">
                  <img src={project.image} alt={project.title} className="portfolio__img" />

                  <div className="portfolio__data">
                    <h3 className="portfolio__title">{project.title}</h3>
                    <p className="portfolio__description">{project.description}</p>
                    {project.link && project.buttonText && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="button button--flex button--small portfolio__button"
                      >
                        {project.buttonText}
                        <i className="uil uil-arrow-right button__icon"></i>
                      </a>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
            
            <div className="swiper-button-next">
              <i className="uil uil-angle-right-b swiper-portfolio-icon"></i>
            </div>
            
            <div className="swiper-button-prev">
              <i className="uil uil-angle-left-b swiper-portfolio-icon"></i>
            </div>
            
            <div className="swiper-pagination"></div>
          </Swiper>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Portfolio