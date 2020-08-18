import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { history as historyPropTypes } from 'history-prop-types';
// import { connect } from 'react-redux';
// Components
import Header from './Header';
import Sidebar from './Sidebar';
// import Footer from './Footer';

/**
 * @file MainLayout is a React Component that works as a main layout for most of component or page
 * in this project.
 *
 * @module MainLayout
 * @extends Component
 */
export class MainLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { children } = this.props;

    return (
      <div
        className="layout layout-header-fixed layout-sidebar-fixed layout-footer-fixed"
      >
        <Header />
        <div className="layout-main">
          <div className="layout-content">
            <div
              className="layout-content-body"
            >
              {children}
            </div>
          </div>
          <Sidebar collapsed />
        </div>
      </div>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;