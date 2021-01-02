import {ArticleInterface, BackendErrorsInterface} from 'src/app/shared/types'

export interface EditArticleStateInterface {
  isSubmitting: boolean
  isLoading: boolean
  article?: ArticleInterface | null
  validationErrors?: BackendErrorsInterface | null
}
