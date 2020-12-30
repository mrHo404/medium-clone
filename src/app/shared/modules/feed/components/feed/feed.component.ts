import {Component, Input, OnDestroy, OnInit} from '@angular/core'
import {select, Store} from '@ngrx/store'
import {Observable, Subscription} from 'rxjs'

import {getFeedAction} from '../../store/actions'
import {
  errorSelector,
  feedSelector,
  isLoadingSelector,
} from '../../store/selectors'
import {AppStateInterface} from '../../../../types'
import {GetFeedResponseInterface} from '../../types'
import {environment} from 'src/environments/environment'
import {ActivatedRoute, Params, Router} from '@angular/router'

@Component({
  selector: 'mc-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit, OnDestroy {
  @Input('apiUrl')
  apiUrlProps!: string

  constructor(
    private store: Store<AppStateInterface>,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  feed$: Observable<GetFeedResponseInterface | undefined> = this.store.pipe(
    select(feedSelector)
  )
  error$: Observable<string | undefined | null> = this.store.pipe(
    select(errorSelector)
  )
  isLoading$: Observable<boolean> = this.store.pipe(select(isLoadingSelector))
  currentPage: number = 1
  queryParamsSubscription: Subscription = this.route.queryParams.subscribe(
    (params: Params) => {
      this.currentPage = Number(params.page || '1')
    }
  )
  limit: number = environment.limit
  baseUrl: string = this.router.url.split('?')[0]

  ngOnInit(): void {
    this.fetchData()
  }
  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe()
  }

  fetchData(): void {
    this.store.dispatch(getFeedAction({url: this.apiUrlProps}))
  }
}
