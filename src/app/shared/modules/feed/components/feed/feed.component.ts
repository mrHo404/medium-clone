import {Component, Input, OnDestroy, OnInit} from '@angular/core'
import {ActivatedRoute, Params, Router} from '@angular/router'
import {select, Store} from '@ngrx/store'
import {Observable, Subscription} from 'rxjs'
import {stringify, parseUrl} from 'query-string'

import {getFeedAction} from '../../store/actions'
import {
  errorSelector,
  feedSelector,
  isLoadingSelector,
} from '../../store/selectors'
import {AppStateInterface} from '../../../../types'
import {GetFeedResponseInterface} from '../../types'
import {environment} from 'src/environments/environment'

@Component({
  selector: 'mc-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit, OnDestroy {
  @Input('apiUrl') apiUrlProps!: string

  constructor(
    private store: Store<AppStateInterface>,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  currentPage: number = 1
  limit: number = environment.limit
  baseUrl: string = this.router.url.split('?')[0]

  feed$: Observable<
    GetFeedResponseInterface | undefined | null
  > = this.store.pipe(select(feedSelector))
  error$: Observable<string | undefined | null> = this.store.pipe(
    select(errorSelector)
  )
  isLoading$: Observable<boolean> = this.store.pipe(select(isLoadingSelector))

  queryParamsSubscription: Subscription = this.route.queryParams.subscribe(
    (params: Params) => {
      this.currentPage = Number(params.page || '1')
      this.fetchFeed()
    }
  )

  ngOnInit(): void {
    this.fetchFeed()
  }
  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe()
  }

  private fetchFeed(): void {
    if (this.apiUrlProps) {
      const parsedUrl = parseUrl(this.apiUrlProps)
      const stringifiedParams = stringify({
        limit: this.limit,
        offset: this.currentPage * this.limit - this.limit,
        ...parsedUrl.query,
      })
      const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`

      this.store.dispatch(getFeedAction({url: apiUrlWithParams}))
    }
  }
}
