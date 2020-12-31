import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'

import {BannerModule, FeedModule} from '../shared/modules'
import {FeedTabsModule} from '../shared/modules/feedTabs/feedTabs.module'
import {PopularTagsModule} from '../shared/modules/popularTags/popularTags.module'
import {YourFeedComponent} from './components/yourFeed/yourFeed.component'

const routes: Routes = [
  {
    path: 'feed',
    component: YourFeedComponent,
  },
]
@NgModule({
  imports: [
    BannerModule,
    CommonModule,
    FeedModule,
    PopularTagsModule,
    FeedTabsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [YourFeedComponent],
})
export class YourFeedFeedModule {}
