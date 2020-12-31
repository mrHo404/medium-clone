import {createFeatureSelector, createSelector} from '@ngrx/store'

import {AppStateInterface} from '../../../types'
import {PopularTagsStateInterface} from '../types'

export const popularTagsFeatureSelector = createFeatureSelector<
  AppStateInterface,
  PopularTagsStateInterface
>('popularTags')

export const isLoadingSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTagsState: PopularTagsStateInterface) => popularTagsState.isLoading
)
export const errorSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTagsState: PopularTagsStateInterface) => popularTagsState.error
)
export const popularTagsSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTagsState: PopularTagsStateInterface) => popularTagsState.data
)
