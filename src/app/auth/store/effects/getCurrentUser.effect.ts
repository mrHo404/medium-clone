import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {of} from 'rxjs'
import {catchError, map, switchMap} from 'rxjs/operators'

import {PersistanceService} from '../../../shared/services'
import {CurrentUserInterface} from '../../../shared/types'
import {AuthService} from '../../services'
import {
  getCurrentUserAction,
  getCurrentUserFailureAction,
  getCurrentUserSuccessAction,
} from '../actions'

@Injectable()
export class GetCurrentUserEffect {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService
  ) {}

  getCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCurrentUserAction),
      switchMap(() => {
        return !this.persistanceService.get('accessToken')
          ? of(getCurrentUserFailureAction())
          : this.authService.getCurrentUser().pipe(
              map((currentUser: CurrentUserInterface) => {
                return getCurrentUserSuccessAction({currentUser})
              }),
              catchError(() => {
                return of(getCurrentUserFailureAction())
              })
            )
      })
    )
  )
}
