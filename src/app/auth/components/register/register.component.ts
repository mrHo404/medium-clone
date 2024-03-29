import {Component, OnDestroy} from '@angular/core'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {select, Store} from '@ngrx/store'
import {Observable, Subscription} from 'rxjs'
import {tap} from 'rxjs/operators'

import {AppStateInterface, BackendErrorsInterface} from '../../../shared/types'
import {registerAction, resetValidationErrors} from '../../store/actions'
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from '../../store/selectors'
import {RegisterRequestInterface} from '../../types'

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['register.component.scss'],
})
export class RegisterComponent implements OnDestroy {
  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppStateInterface>
  ) {}

  registrationForm: FormGroup = this.formBuilder.group({
    username: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9 ]*')]],
    email: ['', [Validators.email, Validators.required]],
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
    const request: RegisterRequestInterface = {
      user: this.registrationForm.value,
    }

    this.store.dispatch(registerAction({request}))
  }
  resetValidationErrors(): void {
    this.resetSubscription = this.backendErrors$.subscribe((errors) => {
      if (errors) {
        this.store.dispatch(resetValidationErrors())
      }
    })
  }
}
