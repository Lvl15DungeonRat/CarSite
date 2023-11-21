import React from 'react'
import Navbar from "/src/Navbar/Navbar"
import "./Home.css"

function Home() {
  return (
    <>
      <Navbar/>
      <body>
        <div className="carImageBox">
          <div className="image"><h2>The Best Car Service in the World</h2></div>
        </div>
      </body>
    </>
  )
}

export default Home
