import { useState, useEffect } from 'react'

export const useScrollSpy = (sectionIds, offset = 50) => {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset

      for (const sectionId of sectionIds) {
        const section = document.getElementById(sectionId)
        if (section) {
          const sectionHeight = section.offsetHeight
          const sectionTop = section.offsetTop - offset

          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Call once to set initial state

    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionIds, offset])

  return activeSection
}