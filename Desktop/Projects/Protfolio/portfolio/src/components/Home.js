import React from 'react'
import Verical_btn from './Verical_btn'
import Header from './Header'
import About from './About'
import Info from './Info'
import Certificate from './Certificate'
import Education from './Education'
import Project from './Project'
import Contact from './Contact'
import Footer from './Footer'

function Home() {
  return (
    <div className='App_main'>
       <Header/>
      <Info/>
       <Verical_btn/>
       <About/>
      <Certificate/>
      <Education/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
