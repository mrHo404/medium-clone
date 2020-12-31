import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {of} from 'rxjs'
import {catchError, map, switchMap} from 'rxjs/operators'
import {PopularTagType} from 'src/app/shared/types'

import {PopularTagsService} from '../../services'
import {
  getPopularTagsAction,
  getPopularTagsFailureAction,
  getPopularTagsSuccessAction,
} from '../actions'

@Injectable()
export class GetPopularTagsEffect {
  constructor(
    private actions$: Actions,
    private popularTagsService: PopularTagsService
  ) {}

  getPopularTags$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPopularTagsAction),
      switchMap(({url}) => {
        return this.popularTagsService.getPopularTags(url).pipe(
          map((popularTags: PopularTagType[]) => {
            return getPopularTagsSuccessAction({popularTags})
          }),
          catchError(() => {
            return of(getPopularTagsFailureAction())
          })
        )
      })
    )
  )
}
