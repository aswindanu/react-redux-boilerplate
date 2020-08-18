import React, { Component } from 'react';

// Component
import DashboardComponent from '../components/DashboardComponent';

/**
 * @file DashboardPage is a React Component that works as a container of
 * DashboardComponent component.
 *
 * @module DashboardPage
 * @extends Component
 */
export class DashboardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="dashboard-page">
        <DashboardComponent />
      </div>
    );
  }
}

export default DashboardPage;
