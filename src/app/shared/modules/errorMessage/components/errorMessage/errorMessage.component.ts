import {Component, Input, OnInit} from '@angular/core'

@Component({
  selector: 'mc-error-message',
  template: '<div>{{message}}</div>',
})
export class ErrorMessageComponent implements OnInit {
  @Input('message') messageProps: string | undefined | null
  message: string = ''

  ngOnInit(): void {
    this.message = this.messageProps
      ? this.messageProps
      : 'Oops, something went wrong'
  }
}
