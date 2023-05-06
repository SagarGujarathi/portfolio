import './css/App.css'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home.js'
import Aboutme from './components/Aboutme'
import Skills from './components/Skills'
import MyProjects from './components/MyProjects'
import html from './images/html.png'
import css from './images/css.png'
import js from './images/js.png'
import cpp from './images/cpp.png'
import mongoDB from './images/mongodb.svg'
import express from './images/express.svg'
import react from './images/react.png'
import node from './images/nodejs.png'
import MyContact from './components/MyContact'

export const techStack = { html, css, js, cpp, mongoDB, express, react, node }
function App() {
  return (
    <>
      <div className="main-content-wrap-container">
        <Navbar />
        <Home />
        <Aboutme />
        <Skills />
        <MyProjects />
        <MyContact />
      </div>
    </>
  )
}

export default App