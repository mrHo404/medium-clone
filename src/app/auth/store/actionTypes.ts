export enum ActionTypes {
  REGISTER = '[Auth] Register',
  REGISTER_SUCCESS = '[Auth] Register success',
  REGISTER_FAILURE = '[Auth] Register failure',

  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login success',
  LOGIN_FAILURE = '[Auth] Login failure',

  RESET_VALIDATION_ERRORS = '[Auth] Reset validation errors',

  GET_USER = '[Auth] Get current user',
  GET_USER_SUCCESS = '[Auth] Get current user success',
  GET_USER_FAILURE = '[Auth] Get current user failure',
}
