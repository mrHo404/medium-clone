import {Action, createReducer, on} from '@ngrx/store'

import {PopularTagsStateInterface} from '../types'
import {
  getPopularTagsAction,
  getPopularTagsSuccessAction,
  getPopularTagsFailureAction,
} from './actions'

const initialState: PopularTagsStateInterface = {
  isLoading: false,
}

const popularTagsReducer = createReducer(
  initialState,
  on(
    getPopularTagsAction,
    (state): PopularTagsStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getPopularTagsSuccessAction,
    (state, action): PopularTagsStateInterface => ({
      ...state,
      isLoading: false,
      error: null,
      data: action.popularTags,
    })
  ),
  on(
    getPopularTagsFailureAction,
    (state): PopularTagsStateInterface => ({
      ...state,
      isLoading: false,
      error: 'some error',
    })
  )
)

export function reducers(state: PopularTagsStateInterface, action: Action) {
  return popularTagsReducer(state, action)
}
