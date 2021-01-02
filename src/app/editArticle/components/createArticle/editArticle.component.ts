import {Component, OnInit} from '@angular/core'
import {ActivatedRoute} from '@angular/router'
import {select, Store} from '@ngrx/store'
import {Observable} from 'rxjs'
import {filter, map} from 'rxjs/operators'

import {
  AppStateInterface,
  ArticleInputInterface,
  ArticleInterface,
  BackendErrorsInterface,
} from '../../../shared/types'
import {getArticleAction, updateArticleAction} from '../../store/actions'
import {
  articleSelector,
  isLoadingSelector,
  isSubmittingSelector,
  validationErrorsSelector,
} from '../../store/selectors'

@Component({
  selector: 'mc-edit-article',
  templateUrl: './editArticle.component.html',
  styleUrls: ['./editArticle.component.scss'],
})
export class EditArticleComponent implements OnInit {
  constructor(
    private store: Store<AppStateInterface>,
    private route: ActivatedRoute
  ) {}
  slug: string | null = this.route.snapshot.paramMap.get('slug')

  // TODO seems to load stale article when edit is performed in succession
  initialValues$: Observable<ArticleInputInterface> = this.store.pipe(
    select(articleSelector),
    filter(Boolean),
    map((article) => {
      const initialArticle = article as ArticleInterface
      return {
        title: initialArticle.title,
        description: initialArticle.description,
        body: initialArticle.body,
        tagList: initialArticle.tagList,
      }
    })
  )
  isLoading$: Observable<boolean> = this.store.pipe(select(isLoadingSelector))
  isSubmitting$: Observable<boolean> = this.store.pipe(
    select(isSubmittingSelector)
  )
  backendErrors$: Observable<
    BackendErrorsInterface | undefined | null
  > = this.store.pipe(select(validationErrorsSelector))

  ngOnInit(): void {
    this.fetchData()
  }
  private fetchData(): void {
    if (this.slug) {
      this.store.dispatch(getArticleAction({slug: this.slug}))
    }
  }

  onSubmit(articleInput: ArticleInputInterface): void {
    if (this.slug) {
      this.store.dispatch(updateArticleAction({slug: this.slug, articleInput}))
    }
  }
}
