import {Component, Input, OnInit} from '@angular/core'
import {select, Store} from '@ngrx/store'
import {Observable} from 'rxjs'

import {getFeedAction} from '../../store/actions'
import {
  errorSelector,
  feedSelector,
  isLoadingSelector,
} from '../../store/selectors'
import {AppStateInterface} from '../../../../types'
import {GetFeedResponseInterface} from '../../types'

@Component({
  selector: 'mc-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  @Input('apiUrl')
  apiUrlProps!: string

  constructor(private store: Store<AppStateInterface>) {}

  feed$: Observable<GetFeedResponseInterface | undefined> = this.store.pipe(
    select(feedSelector)
  )
  error$: Observable<string | undefined | null> = this.store.pipe(
    select(errorSelector)
  )
  isLoading$: Observable<boolean> = this.store.pipe(select(isLoadingSelector))

  ngOnInit(): void {
    this.fetchData()
  }

  fetchData(): void {
    this.store.dispatch(getFeedAction({url: this.apiUrlProps}))
  }
}
