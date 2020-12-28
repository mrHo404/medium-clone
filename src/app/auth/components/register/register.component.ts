import {Component} from '@angular/core'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {select, Store} from '@ngrx/store'
import {Observable} from 'rxjs'
import {AppStateInterface} from 'src/app/shared/types'

import {registerAction} from '../../store/actions'
import {isSubmittingSelector} from '../../store/selectors'

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['register.component.scss'],
})
export class RegisterComponent {
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

  onSubmit(): void {
    console.log(
      'submit',
      this.registrationForm.value,
      this.registrationForm.valid
    )

    this.store.dispatch(registerAction(this.registrationForm.value))
  }
}
