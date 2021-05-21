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
        <p><b>🎂 Birthday: </b>June 24, 2014 (when the name first came into existence)</p>
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
        <p>Our projects on <a rel="noopener noreferrer" target="_blank" href="https://github.com/Cobresun">GitHub</a> and our apps on the <a rel="noopener noreferrer" target="_blank" href="https://play.google.com/store/apps/developer?id=Cobresun">Google Play Store</a>!</p>
      </div>
      
    </div>
  )
}

export default App
