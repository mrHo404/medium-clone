import {createAction, props} from '@ngrx/store'

import {
  ArticleInputInterface,
  ArticleInterface,
  BackendErrorsInterface,
} from 'src/app/shared/types'
import {ActionTypes} from '../actionTypes'

export const createArticleAction = createAction(
  ActionTypes.CREATE_ARTICLE,
  props<{articleInput: ArticleInputInterface}>()
)

export const createArticleSuccessAction = createAction(
  ActionTypes.CREATE_ARTICLE_SUCCESS,
  props<{article: ArticleInterface}>()
)

export const createArticleFailureAction = createAction(
  ActionTypes.CREATE_ARTICLE_FAILURE,
  props<{errors: BackendErrorsInterface}>()
)
