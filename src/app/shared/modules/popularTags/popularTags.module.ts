import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {RouterModule} from '@angular/router'
import {EffectsModule} from '@ngrx/effects'
import {StoreModule} from '@ngrx/store'

import {ErrorMessageModule} from '../errorMessage/errorMessage.module'
import {LoadingModule} from '../loading/loading.module'
import {PopularTagsComponent} from './components/popularTags/popularTags.component'
import {PopularTagsService} from './services'
import {GetPopularTagsEffect} from './store/effects'
import {reducers} from './store/reducers'

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetPopularTagsEffect]),
    ErrorMessageModule,
    LoadingModule,
    RouterModule,
    StoreModule.forFeature('popularTags', reducers),
  ],
  declarations: [PopularTagsComponent],
  exports: [PopularTagsComponent],
  providers: [PopularTagsService],
})
export class PopularTagsModule {}
