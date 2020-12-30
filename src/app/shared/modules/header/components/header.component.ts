import {Component} from '@angular/core'
import {select, Store} from '@ngrx/store'
import {Observable} from 'rxjs'
import {
  currentUserSelector,
  isAnonymousSelector,
  isLoggedInSelector,
} from 'src/app/auth/store/selectors'
import {AppStateInterface, CurrentUserInterface} from 'src/app/shared/types'

@Component({
  selector: 'mc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private store: Store<AppStateInterface>) {}

  isLoggedIn$: Observable<boolean> = this.store.pipe(select(isLoggedInSelector))
  isAnonymous$: Observable<boolean> = this.store.pipe(
    select(isAnonymousSelector)
  )
  currentUser$: Observable<
    CurrentUserInterface | undefined | null
  > = this.store.pipe(select(currentUserSelector))
}
