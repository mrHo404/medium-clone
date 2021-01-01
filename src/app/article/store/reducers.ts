import {routerNavigationAction} from '@ngrx/router-store'
import {Action, createReducer, on} from '@ngrx/store'

import {ArticleStateInterface} from '../types'
import {
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccessAction,
} from './actions'

const initialState: ArticleStateInterface = {
  isLoading: false,
}

const articleReducer = createReducer(
  initialState,
  on(
    getArticleAction,
    (state): ArticleStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getArticleSuccessAction,
    (state, action): ArticleStateInterface => ({
      ...state,
      isLoading: false,
      error: null,
      data: action.article,
    })
  ),
  on(
    getArticleFailureAction,
    (state): ArticleStateInterface => ({
      ...state,
      isLoading: false,
      error: 'some error',
    })
  ),
  on(
    routerNavigationAction,
    (state): ArticleStateInterface => ({
      ...state,
      data: null,
      error: null,
    })
  )
)

export function reducers(state: ArticleStateInterface, action: Action) {
  return articleReducer(state, action)
}
