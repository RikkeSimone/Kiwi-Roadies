import React from 'react'

function Header () {
  return (
    <div className="header">
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />

          <span></span>
          <span></span>
          <span></span>

          <ul id="menu">
            <p>Made with love by Ariana, Rikke, Kim and Jonty</p>
          </ul>
        </div>
      </nav>
      <a href="/">
        <img className="logo" src="./graphics/kiwiroadieslogo-no-road.png"/>
      </a>
      <img className="github-gato" src="./github-gato.png"/>
    </div>
  )
}

export default Header
