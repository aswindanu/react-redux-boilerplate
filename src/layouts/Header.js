import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
// import alterraCourseLogo from '../assets/img/logo_navbar@2x.png';

/**
 * @file Header is React Component that renders Header for Layout Dashboard
 *
 * @module Header
 * @extends Component
 */
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="layout-header">
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="/">
            <span>
              Dashboard
            </span>
          </Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}

Header.propTypes = {
};

export default Header;