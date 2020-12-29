import {createAction, props} from '@ngrx/store'

import {ActionTypes} from '../actionTypes'
import {LoginRequestInterface} from '../../types'
import {
  BackendErrorsInterface,
  CurrentUserInterface,
} from '../../../shared/types'

export const loginAction = createAction(
  ActionTypes.LOGIN,
  props<{request: LoginRequestInterface}>()
)

export const loginSuccessAction = createAction(
  ActionTypes.LOGIN_SUCCESS,
  props<{currentUser: CurrentUserInterface}>()
)

export const loginFailureAction = createAction(
  ActionTypes.LOGIN_FAILURE,
  props<{errors: BackendErrorsInterface | null}>()
)
