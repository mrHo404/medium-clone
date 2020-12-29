import {createAction, props} from '@ngrx/store'

import {ActionTypes} from '../actionTypes'
import {RegisterRequestInterface} from '../../types'
import {
  BackendErrorsInterface,
  CurrentUserInterface,
} from '../../../shared/types'

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{request: RegisterRequestInterface}>()
)

export const registerSuccessAction = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{currentUser: CurrentUserInterface}>()
)

export const registerFailureAction = createAction(
  ActionTypes.REGISTER_FAILURE,
  props<{errors: BackendErrorsInterface | null}>()
)
