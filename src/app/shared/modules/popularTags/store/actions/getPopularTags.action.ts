import {createAction, props} from '@ngrx/store'
import {PopularTagType} from 'src/app/shared/types'

import {ActionType} from '../actionTypes'

export const getPopularTagsAction = createAction(
  ActionType.GET_POPULAR_TAGS,
  props<{url: string}>()
)
export const getPopularTagsSuccessAction = createAction(
  ActionType.GET_POPULAR_TAGS_SUCCESS,
  props<{popularTags: PopularTagType[]}>()
)
export const getPopularTagsFailureAction = createAction(
  ActionType.GET_POPULAR_TAGS_FAILURE
)
