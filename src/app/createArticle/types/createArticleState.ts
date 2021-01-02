import {BackendErrorsInterface} from 'src/app/shared/types'

export interface CreateArticleStateInterface {
  isSubmitting: boolean
  validationErrors?: BackendErrorsInterface | null
}
