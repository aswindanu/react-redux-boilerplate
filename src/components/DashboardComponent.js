import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// API
import axiosUser from '../api/userApi';
import axiosToken from '../api/tokenApi';

// Actions
import { userActions, loginActions, contextActions } from '../redux/actions';

// Selectors
import {
  getUserName,
  getToken,
  getContext,
} from '../redux/selectors';

/**
 * @file DashboardComponent is a React Component that renders dashboard.
 *
 * @module Dashboard
 * @extends Component
 */
export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /**
   * @method getAxiosUser
   * @summary Call user dummy function from sampleApi.js.
   * @return {func} Call the userActions function and update userName reducers.
   */
  getAxiosUser = () => {
    const { userActions } = this.props;
    axiosUser()
      .then(async (response) => {
        const nameOne = response[0].name;
        const nameTwo = response[1].name;
        const nameThree = response[2].name;
        const nameFour = response[3].name;
        userActions(`${nameOne}, ${nameTwo}, ${nameThree}, and ${nameFour}`);
      })
      .catch(async (err) => {
        console.log(err);
      });
  }

  /**
   * @method getAxiosToken
   * @summary Call token Edx function from tokenApi.js.
   * @return {func} Call the loginActions function and update token reducers.
   */
  getAxiosToken = () => {
    const { loginActions } = this.props;
    axiosToken()
      .then(async (response) => {
        loginActions(`${JSON.stringify(response.access_token)}`);
      })
      .catch(async (err) => {
        console.log(err);
      });
  }

  /**
   * @method changeInputRedux
   * @summary Call token Edx function from tokenApi.js.
   * @param {string} input - User context input.
   * @return {func} Call the contextActions function and update context reducers.
   */
  changeInputRedux = (input) => {
    const { contextActions } = this.props;
    contextActions(input.target.value);
  }

  render() {
    // Redux props
    const {
      userName,
      token,
      context,
    } = this.props;

    return (
      <div className="App" id="customContent">
        <header className="App-header">
          <button id="user" type="button" onClick={() => this.getAxiosUser()}>Get User</button>
          <h2>
            Result axios userName (redux) :
          </h2>
          <p id="user">
            {userName}
          </p>

          <button id="token" type="button" onClick={() => this.getAxiosToken()}>Get Token</button>
          <h2>
            Result axios token Edx (redux) :
          </h2>
          <p id="token">
            {token}
          </p>

          <input id="context" onChange={(e) => this.changeInputRedux(e)} name="custom" />
          <h3>
            Result axios context (redux) :
          </h3>
          <p id="context">
            {context}
          </p>
        </header>
      </div>
    );
  }
}

// Dashboard.defaultProps = {
//   userActions: '',
//   loginActions: '',
//   contextActions: '',
// };

Dashboard.propTypes = {
  // Actions
  userActions: PropTypes.func.isRequired,
  loginActions: PropTypes.func.isRequired,
  contextActions: PropTypes.func.isRequired,

  // Selectors
  userName: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
  context: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  userName: getUserName(state.dashboardReducer),
  token: getToken(state.dashboardReducer),
  context: getContext(state.dashboardReducer),
});

const mapDispatchToProps = {
  userActions,
  loginActions,
  contextActions,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(Dashboard));
