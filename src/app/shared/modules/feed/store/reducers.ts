import {routerNavigationAction} from '@ngrx/router-store'
import {Action, createReducer, on} from '@ngrx/store'

import {FeedStateInterface} from '../types'
import {
  getFeedAction,
  getFeedFailureAction,
  getFeedSuccessAction,
} from './actions'

const initialState: FeedStateInterface = {
  isLoading: false,
}

const feedReducer = createReducer(
  initialState,
  on(
    getFeedAction,
    (state): FeedStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getFeedSuccessAction,
    (state, action): FeedStateInterface => ({
      ...state,
      isLoading: false,
      error: null,
      data: action.feed,
    })
  ),
  on(
    getFeedFailureAction,
    (state): FeedStateInterface => ({
      ...state,
      isLoading: false,
      error: 'some error',
    })
  ),
  on(
    routerNavigationAction,
    (state): FeedStateInterface => ({
      ...state,
      data: null,
      error: null,
    })
  )
)

export function reducers(state: FeedStateInterface, action: Action) {
  return feedReducer(state, action)
}
