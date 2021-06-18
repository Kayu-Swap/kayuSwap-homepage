import React from 'react';
import kLogo from '../images/kayuLogo.png';
import DOWN_ARROW from '../images/down-arrow.svg'

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="menu">
          <nav className="navbar">
            <div className="kLogoImg">
              <a className="navbar-brand" href="https://kayuswap.com/"><img src={kLogo} alt="KayuSwap" /> </a>
            </div>
            <button className="navbar-toggler" id="togglebutton" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <img src={DOWN_ARROW} alt="Down Arrow" />
            </button>
            <div className={["collapse navbar-collapse"].join(" ")} id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="btn" href="https://app.kayuswap.com/" target="_blank" rel="noreferrer">Launch App</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}
