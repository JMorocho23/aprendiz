import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
  return (
<nav className="navbar navbar-expand-lg bg-dark">
  <div className="container">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand" href="#">Aprendiz</a>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <button type="button" className="btn btn-primary">Registrate</button>
        </li>
        <li className="nav-item">
          <button type="button" className="btn btn-link">Login</button>
        </li>
        <li className="nav-item">
          <a className="nav-link">
          <FontAwesomeIcon icon={faSearch} size="lg" color="#fff" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Header