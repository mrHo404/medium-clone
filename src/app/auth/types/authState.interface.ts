import {CurrentUserInterface, BackendErrorsInterface} from '../../shared/types'

export interface AuthStateInterface {
  isSubmitting: boolean
  currentUser?: CurrentUserInterface
  isLoggedIn?: boolean
  validationErrors?: BackendErrorsInterface
}
