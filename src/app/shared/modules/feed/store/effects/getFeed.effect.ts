import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {of} from 'rxjs'
import {catchError, map, switchMap} from 'rxjs/operators'

import {FeedService} from '../../services'
import {GetFeedResponseInterface} from '../../types'
import {
  getFeedAction,
  getFeedFailureAction,
  getFeedSuccessAction,
} from '../actions'

@Injectable()
export class GetFeedEffect {
  constructor(private actions$: Actions, private feedService: FeedService) {}

  getFeed$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getFeedAction),
      switchMap(({url}) => {
        return this.feedService.getFeed(url).pipe(
          map((feed: GetFeedResponseInterface) => {
            return getFeedSuccessAction({feed})
          }),
          catchError(() => {
            return of(getFeedFailureAction())
          })
        )
      })
    )
  )
}
