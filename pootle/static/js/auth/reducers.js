/*
 * Copyright (C) Pootle contributors.
 *
 * This file is a part of the Pootle project. It is distributed under the GPL3
 * or later license. See the LICENSE file for a copy of the license and the
 * AUTHORS file for copyright and authorship information.
 */

import { combineReducers } from 'redux';

import {
  GOTO_SCREEN,
  SIGNIN_REQUEST, SIGNIN_SUCCESS, SIGNIN_FAILURE,
  SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE,
  REQ_PW_RESET_REQUEST, REQ_PW_RESET_SUCCESS, REQ_PW_RESET_FAILURE,
  PW_RESET_REQUEST, PW_RESET_SUCCESS, PW_RESET_FAILURE,
  VERIFY_SOCIAL_REQUEST, VERIFY_SOCIAL_SUCCESS, VERIFY_SOCIAL_FAILURE,
} from './actions';


function screen(state='signIn', action) {
  switch (action.type) {
    case GOTO_SCREEN:
      return action.screen;

    default:
      return state;
  }
}


function isLoading(state=false, action) {
  switch (action.type) {
    case SIGNIN_REQUEST:
      return true;

    case SIGNIN_SUCCESS:
    case SIGNIN_FAILURE:
      return false;

    default:
      return state;
  }
}


function redirectTo(state=null, action) {
  switch (action.type) {
    default:
      return state;
  }
}


function resetEmail(state=null, action) {
  switch (action.type) {
    default:
      return state;
  }
}


function signUpEmail(state=null, action) {
  switch (action.type) {
    default:
      return state;
  }
}


function formErrors(state={}, action) {
  switch (action.type) {
    default:
      return state;
  }
}


const authReducer = combineReducers({
  screen,
  redirectTo,
  resetEmail,
  signUpEmail,
  isLoading,
  formErrors,
});


export default authReducer;
