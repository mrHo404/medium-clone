import {Component, OnInit} from '@angular/core'
import {select, Store} from '@ngrx/store'
import {Observable} from 'rxjs'
import {AppStateInterface, PopularTagType} from 'src/app/shared/types'
import {getPopularTagsAction} from '../../store/actions'
import {
  errorSelector,
  isLoadingSelector,
  popularTagsSelector,
} from '../../store/selectors'
import {GetPopularTagsResponseInterface} from '../../types'

@Component({
  selector: 'mc-popular-tags',
  templateUrl: './popularTags.component.html',
})
export class PopularTagsComponent implements OnInit {
  popularTagUrl: string = '/tags'

  constructor(private store: Store<AppStateInterface>) {}

  popularTags$: Observable<
    PopularTagType[] | undefined | null
  > = this.store.pipe(select(popularTagsSelector))
  error$: Observable<string | undefined | null> = this.store.pipe(
    select(errorSelector)
  )
  isLoading$: Observable<boolean> = this.store.pipe(select(isLoadingSelector))

  ngOnInit(): void {
    this.fetchPopularTags()
  }

  private fetchPopularTags() {
    this.store.dispatch(getPopularTagsAction({url: this.popularTagUrl}))
  }
}
