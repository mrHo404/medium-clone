import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {RouterModule} from '@angular/router'
import {EffectsModule} from '@ngrx/effects'
import {StoreModule} from '@ngrx/store'

import {FeedComponent} from './components/feed/feed.component'
import {FeedService} from './services'
import {GetFeedEffect} from './store/effects'
import {reducers} from './store/reducers'

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetFeedEffect]),
    RouterModule,
    StoreModule.forFeature('feed', reducers),
  ],
  declarations: [FeedComponent],
  exports: [FeedComponent],
  providers: [FeedService],
})
export class FeedModule {}
