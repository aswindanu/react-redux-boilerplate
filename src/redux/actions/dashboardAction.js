import { SET_USER_NAME, LOGIN_ACTIONS, CONTEXT_ACTIONS } from '../constants';

/**
 * @method userActions
 * @summary Action for handling login
 */
export const userActions = (userName) => ({
  type: SET_USER_NAME,
  payload: {
    userName,
  },
});

/**
 * @method loginActions
 * @summary Action for handling login
 */
export const loginActions = (token) => ({
  type: LOGIN_ACTIONS,
  payload: {
    token,
  },
});

/**
 * @method contextActions
 * @summary Action for handling context
 */
export const contextActions = (context) => ({
  type: CONTEXT_ACTIONS,
  payload: {
    context,
  },
});
