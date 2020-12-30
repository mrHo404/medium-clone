import {Component, Input, OnInit} from '@angular/core'
import {UtilsService} from 'src/app/shared/services'

@Component({
  selector: 'mc-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input('total') totalProps?: number
  @Input('limit') limitProps!: number
  @Input('currentPage') currentPageProps!: number
  @Input('url') urlProps!: string

  pagesCount: number = 0
  pages: number[] = []

  constructor(private utilService: UtilsService) {}

  ngOnInit(): void {
    if (this.totalProps) {
      this.pagesCount = Math.ceil(this.totalProps / this.limitProps)
      this.pages = this.utilService.range(1, this.pagesCount)
    }
  }
}
