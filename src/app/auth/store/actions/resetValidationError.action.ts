import {createAction, props} from '@ngrx/store'

import {ActionTypes} from '../actionTypes'

export const resetValidationErrors = createAction(
  ActionTypes.RESET_VALIDATION_ERRORS
)
