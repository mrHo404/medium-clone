import {Component, Input, OnDestroy, OnInit} from '@angular/core'
import {ActivatedRoute} from '@angular/router'
import {select, Store} from '@ngrx/store'
import {combineLatest, Observable, Subscription} from 'rxjs'
import {map} from 'rxjs/operators'

import {
  errorSelector,
  articleSelector,
  isLoadingSelector,
} from '../../store/selectors'
import {
  AppStateInterface,
  ArticleInterface,
  CurrentUserInterface,
} from '../../../shared/types'
import {getArticleAction} from '../../store/actions'
import {currentUserSelector} from 'src/app/auth/store/selectors'

@Component({
  selector: 'mc-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit, OnDestroy {
  @Input('apiUrl') apiUrlProps!: string

  constructor(
    private store: Store<AppStateInterface>,
    private route: ActivatedRoute
  ) {}
  slug: string | null = this.route.snapshot.paramMap.get('slug')
  article: ArticleInterface | null | undefined

  // manual subscription used so that template doesnt need the async pipe for each article attribute
  articleSubscription: Subscription = this.store
    .pipe(select(articleSelector))
    .subscribe((article: ArticleInterface | null | undefined) => {
      if (article) {
        this.article = article
      }
    })
  error$: Observable<string | undefined | null> = this.store.pipe(
    select(errorSelector)
  )
  isLoading$: Observable<boolean> = this.store.pipe(select(isLoadingSelector))
  isAuthor$: Observable<boolean> = combineLatest([
    this.store.pipe(select(articleSelector)),
    this.store.pipe(select(currentUserSelector)),
  ]).pipe(
    map(
      ([article, currentUser]: [
        ArticleInterface | null | undefined,
        CurrentUserInterface | null | undefined
      ]) => {
        // if (!article || !currentUser) {
        //   return false
        // }
        return article?.author.username === currentUser?.username
      }
    )
  )

  ngOnInit(): void {
    this.fetchData()
    this.articleSubscription
  }
  ngOnDestroy(): void {
    this.articleSubscription.unsubscribe()
  }

  private fetchData(): void {
    if (this.slug) {
      this.store.dispatch(getArticleAction({slug: this.slug}))
    }
  }
}
