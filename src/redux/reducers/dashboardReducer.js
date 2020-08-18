/*
 *
 * Dashboard reducers
 *
 */

import * as CONST from '../constants/index';

const initialState = {
  userName: '',
  token: '',
  context: '',
};

/**
 * @function dashboardReducer
 * @summary Dashboard reducers that change the global state based on actions.
 * @param {object} state - Initial global state.
 * @param {func} action - Action object.
 * @return {object} Updated global state.
 */
function dashboardReducer(state = initialState, action) {
  switch (action.type) {
    case CONST.SET_USER_NAME:
      return {
        ...state,
        userName: action.payload.userName,
      };
    case CONST.LOGIN_ACTIONS:
      return {
        ...state,
        token: action.payload.token,
      };
    case CONST.CONTEXT_ACTIONS:
      return {
        ...state,
        context: action.payload.context,
      };
    default:
      return state;
  }
}

export default dashboardReducer;
