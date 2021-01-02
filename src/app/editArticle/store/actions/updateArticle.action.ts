import {createAction, props} from '@ngrx/store'

import {
  ArticleInputInterface,
  ArticleInterface,
  BackendErrorsInterface,
} from 'src/app/shared/types'
import {ActionTypes} from '../actionTypes'

export const updateArticleAction = createAction(
  ActionTypes.UPDATE_ARTICLE,
  props<{slug: string; articleInput: ArticleInputInterface}>()
)

export const updateArticleSuccessAction = createAction(
  ActionTypes.UPDATE_ARTICLE_SUCCESS,
  props<{article: ArticleInterface}>()
)

export const updateArticleFailureAction = createAction(
  ActionTypes.UPDATE_ARTICLE_FAILURE,
  props<{errors: BackendErrorsInterface}>()
)
