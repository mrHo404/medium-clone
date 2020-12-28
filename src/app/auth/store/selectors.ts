import {createFeatureSelector, createSelector} from '@ngrx/store'

import {AppStateInterface} from 'src/app/shared/types'
import {AuthStateInterface} from '../types'

export const authFeatureSelector = createFeatureSelector<
  AppStateInterface,
  AuthStateInterface
>('auth')

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isSubmitting
)
