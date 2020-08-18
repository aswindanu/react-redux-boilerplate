/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import config from '../config/sidebar.json';

/**
 * @file Sidebar is a React Component that renders sidebar for most of the page.
 *
 * @module Sidebar
 * @extends Component
 */
export class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { collapsed } = this.props;

    const layout = collapsed ? 'sidenav-collapsed' : 'sidenav-regular';
    const url = window.location.pathname.split('/');
    const urlParent = `/${url[1]}`;

    return (
      <div className="layout-sidebar bg-light">
        <div className="layout-sidebar-body">
          <nav id="sidenav" className="sidenav-collapse collapse">
            <ul className={`sidenav level-1 ${layout}`}>
              {config.map((data, index) => {
                const output = data.url === urlParent ? (
                  <li className="sidenav-item active" key={index}>
                    <a href={data.url}>
                      <span className="sidenav-label">{data.title}</span>
                    </a>
                  </li>
                ) : (
                  <li className="sidenav-item" key={index}>
                    <a href={data.url}>
                      <span className="sidenav-label">{data.title}</span>
                    </a>
                  </li>
                );
                return output;
              })}
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

Sidebar.propTypes = {
  collapsed: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]).isRequired,
};

export default Sidebar;