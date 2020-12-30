import {createAction, props} from '@ngrx/store'

import {ActionTypes} from '../actionTypes'
import {CurrentUserInterface} from '../../../shared/types'

export const getCurrentUserAction = createAction(ActionTypes.GET_USER)
export const getCurrentUserSuccessAction = createAction(
  ActionTypes.GET_USER_SUCCESS,
  props<{currentUser: CurrentUserInterface}>()
)
export const getCurrentUserFailureAction = createAction(
  ActionTypes.GET_USER_FAILURE
)
