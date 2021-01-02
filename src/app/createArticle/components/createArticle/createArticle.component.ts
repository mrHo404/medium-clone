import {Component} from '@angular/core'
import {select, Store} from '@ngrx/store'
import {Observable} from 'rxjs'

import {
  AppStateInterface,
  ArticleInputInterface,
  BackendErrorsInterface,
} from '../../../shared/types'
import {createArticleAction} from '../../store/actions'
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from '../../store/selectors'

@Component({
  selector: 'mc-create-article',
  templateUrl: './createArticle.component.html',
  styleUrls: ['./createArticle.component.scss'],
})
export class CreateArticleComponent {
  constructor(private store: Store<AppStateInterface>) {}
  initialValues: ArticleInputInterface = {
    title: '',
    description: '',
    body: '',
    tagList: [],
  }

  isSubmitting$: Observable<boolean> = this.store.pipe(
    select(isSubmittingSelector)
  )

  backendErrors$: Observable<
    BackendErrorsInterface | undefined | null
  > = this.store.pipe(select(validationErrorsSelector))

  onSubmit(articleInput: ArticleInputInterface): void {
    this.store.dispatch(createArticleAction({articleInput}))
  }
}
