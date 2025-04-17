import React from 'react'
import Navbar from './Components/Nav/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/about/about'
import Skills from './Components/skill/Skills'
import Project from './Components/project/Project'
import Contacts from './Components/Contact/Contacts'
import Footer from './Components/footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <div id='Hero'><Hero/></div>
      <div id='About'><About/></div>
      <div id='Skills'><Skills/></div>
      <div id='Project'><Project/></div>
      <div id='Contacts'><Contacts/></div>
      <div ><Footer/></div>
    </div>
  )
}

export default App
