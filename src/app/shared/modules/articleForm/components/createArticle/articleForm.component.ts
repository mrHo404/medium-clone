import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'
import {FormBuilder, FormGroup} from '@angular/forms'

import {
  ArticleInputInterface,
  BackendErrorsInterface,
} from 'src/app/shared/types'

@Component({
  selector: 'mc-article-form',
  templateUrl: './articleForm.component.html',
  styleUrls: ['./articleForm.component.scss'],
})
export class ArticleFormComponent implements OnInit {
  @Input('initialValues') initialValuesProps?: ArticleInputInterface | null
  @Input('isSubmitting') isSubmittingProps!: boolean | null
  @Input('errors') errorsProps?: BackendErrorsInterface | null

  @Output('articleSubmit')
  articleSubmitEvent = new EventEmitter<ArticleInputInterface>()

  articleForm!: FormGroup

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    if (this.initialValuesProps) {
      this.articleForm = this.formBuilder.group({
        title: this.initialValuesProps.title,
        description: this.initialValuesProps.description,
        body: this.initialValuesProps.body,
        tagList: this.initialValuesProps.tagList.join(' '),
      })
    }
  }

  onSubmit(): void {
    this.articleSubmitEvent.emit(this.articleForm.value)
  }
}
