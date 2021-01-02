import {Component, OnDestroy} from '@angular/core'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {select, Store} from '@ngrx/store'
import {Observable, Subscription} from 'rxjs'

import {AppStateInterface, BackendErrorsInterface} from '../../../shared/types'
import {loginAction, resetValidationErrors} from '../../store/actions'
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from '../../store/selectors'
import {LoginRequestInterface} from '../../types'

@Component({
  selector: 'mc-login',
  templateUrl: './login.component.html',
  styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnDestroy {
  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppStateInterface>
  ) {}

  loginForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  })

  isSubmitting$: Observable<boolean> = this.store.pipe(
    select(isSubmittingSelector)
  )

  backendErrors$: Observable<
    BackendErrorsInterface | undefined | null
  > = this.store.pipe(select(validationErrorsSelector))

  resetSubscription: Subscription | undefined

  ngOnDestroy(): void {
    this.resetSubscription?.unsubscribe()
  }
  onSubmit(): void {
    const request: LoginRequestInterface = {
      user: this.loginForm.value,
    }

    this.store.dispatch(loginAction({request}))
  }

  resetValidationErrors(): void {
    this.resetSubscription = this.backendErrors$.subscribe((errors) => {
      if (errors) {
        this.store.dispatch(resetValidationErrors())
      }
    })
  }
}
