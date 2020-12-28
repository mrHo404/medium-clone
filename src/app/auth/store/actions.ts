import {createAction, props} from '@ngrx/store'

import {ActionTypes} from './actionTypes'
import {RegisterRequestInterface} from '../types'

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{request: RegisterRequestInterface}>()
)
