import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'

import {BannerModule, FeedModule} from '../shared/modules'
import {FeedTabsModule} from '../shared/modules/feedTabs/feedTabs.module'
import {PopularTagsModule} from '../shared/modules/popularTags/popularTags.module'
import {TagFeedComponent} from './components/tagFeed/tagFeed.component'

const routes: Routes = [
  {
    path: 'tags/:slug',
    component: TagFeedComponent,
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
  declarations: [TagFeedComponent],
})
export class TagFeedModule {}
