import React from 'react'
import "./Navbar.css"
import { BrowserRouter as Router, Route, Link, Routes} from "react-router-dom"

function Navbar() {

  function activateMenu(){
    const menu = document.querySelector("[data-activeMenu]");
    menu.style.display = "block";
  }

  return (
    <>
        <header>
          <h1><em>Teppex</em></h1>
          <span className='hamburgerMenu'>
            <span onClick={activateMenu} style={{color: 'white', fontSize: "60px", paddingRight: "20px"}} class="material-icons-sharp">menu</span>   
          </span>
          <Link className='link' to="/">Home</Link>
          <Link className='link' to="/services">Services</Link>
          <Link className='link' to="/prices">Prices</Link>
          <Link className='link' to="/about">About</Link>
          <span className='red-line'></span>
        </header>
        <div data-activeMenu className="box">
          <Link className='link' to="/">Home</Link>
          <Link className='link' to="/services">Services</Link>
          <Link className='link' to="/prices">Prices</Link>
          <Link className='link' to="/about">About</Link>
        </div>
    </>
  )
}

export default Navbar
