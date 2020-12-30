import {CurrentUserInterface, BackendErrorsInterface} from '../../shared/types'

export interface AuthStateInterface {
  isLoading: boolean
  isSubmitting: boolean
  currentUser?: CurrentUserInterface | null
  isLoggedIn?: boolean
  validationErrors?: BackendErrorsInterface | null
}
