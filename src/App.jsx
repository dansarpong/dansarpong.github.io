import React from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Qualification from './components/Qualification/Qualification'
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import ScrollUp from './components/ScrollUp/ScrollUp'

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <main className="main">
          <Home />
          <About />
          <Skills />
          <Qualification />
          <Services />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
        <ScrollUp />
      </div>
    </ThemeProvider>
  )
}

export default App