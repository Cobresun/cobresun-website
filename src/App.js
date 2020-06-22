import React from 'react'
import './App.css'
import Image from 'react-bootstrap/Image'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


function App() {
  return (
    <div>
      <Navbar expand="lg">
        <Navbar.Brand href="#home">
          <Image style={{width: "56px", height: "56px"}} src="/logo.png" alt="Cobresun Logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About Us</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div id="about">
        <h1>About Us</h1>
        <p><b>🎂 Birthday: </b>June 24, 2014</p>
        <p><b>🎯 Mission: </b>Make a video game 🎮</p>
        <b>👨‍👨‍👦‍👦 Members:</b>
        <ul>
          <li><a rel="noopener noreferrer" target="_blank" href="https://github.com/cole-adams">Cole Adams</a></li>
          <li><a rel="noopener noreferrer" target="_blank" href="https://bnor.me">Brian Norman</a></li>
          <li><a rel="noopener noreferrer" target="_blank" href="https://wesley-tang.github.io">Wesley Tang</a></li>
          <li><a rel="noopener noreferrer" target="_blank" href="https://sunnynagam.github.io">Sunny Nagam</a></li>
        </ul>
      </div>
      

      <div id="projects">
        <h1>Projects</h1>
        <a href="/fadeaway-mac.zip" download>Fadeaway Mac Download</a>
        <br></br>
        <a href="/fadeaway-win.zip" download>Fadeaway Windows Download</a>
      </div>
      
    </div>
  )
}

export default App
