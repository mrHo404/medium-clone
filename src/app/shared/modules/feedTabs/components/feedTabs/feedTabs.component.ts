import {Component, Input} from '@angular/core'
import {select, Store} from '@ngrx/store'
import {Observable} from 'rxjs'

import {isLoggedInSelector} from '../../../../../auth/store/selectors'
import {AppStateInterface} from '../../../../types'

@Component({
  selector: 'mc-feed-tabs',
  templateUrl: './feedTabs.component.html',
})
export class FeedTabsComponent {
  @Input('tagName') tagNameProps?: string | null

  constructor(private store: Store<AppStateInterface>) {}

  isLoggedIn$: Observable<boolean> = this.store.pipe(select(isLoggedInSelector))
}
