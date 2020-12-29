import {Component, Input, OnInit} from '@angular/core'
import {BackendErrorsInterface} from '../../../../types'

@Component({
  selector: 'mc-backend-error-messages',
  templateUrl: './backendErrorMessages.component.html',
  styleUrls: ['./backendErrorMessages.component.scss'],
})
export class BackendErrorMessagesComponent implements OnInit {
  // why are aliases not recommended?
  @Input('backendErrors') backendErrorsProps:
    | BackendErrorsInterface
    | null
    | undefined

  errorMessages: string[] = []

  ngOnInit(): void {
    this.backendErrorsProps
      ? (this.errorMessages = Object.keys(this.backendErrorsProps).map(
          (name: string) => {
            const messages = this.backendErrorsProps
              ? this.backendErrorsProps[name].join(' ')
              : ''
            return `${name} ${messages}`
          }
        ))
      : (this.errorMessages = [])
  }
}
