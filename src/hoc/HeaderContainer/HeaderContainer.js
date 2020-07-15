import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

import './HeaderContainer.css'

const navStyle = {
  padding: '0px 40px'
}

class Header extends Component {
  state = {
    registr: true
  }

  render() {
    const {visibleFunc} = this.props;

    return (
      <header>
        <nav style={navStyle}>
          <div className="nav-wrapper">
            <NavLink to="/"><p className="brand-logo">Weather App</p></NavLink>
            <ul id="nav-mobile" className="right">
              <li style={{display: 'none'}}><NavLink to="#" onClick={visibleFunc}> Sass </NavLink></li>
              <li style={{display: 'none'}}><NavLink to="/authorization" className="a-navlink"> Components </NavLink></li>
              <li><NavLink to="/javascript" className="a-navlink"> JavaScript </NavLink></li>
              <li><NavLink to="/dragdrop" className="a-navlink"> Drag&Drop </NavLink></li>

              {
                this.state.registr
                ? <img src="https://image.flaticon.com/icons/png/512/126/126258.png" className="avatar-image" alt=""/>
                : <button className="registration-button"><NavLink to="/error404">Login</NavLink></button>
              }
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header;
