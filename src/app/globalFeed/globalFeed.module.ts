import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'

import {BannerModule, FeedModule} from '../shared/modules'
import {GlobalFeedComponent} from './components/globalFeed/globalFeed.component'

const routes: Routes = [
  {
    path: '',
    component: GlobalFeedComponent,
  },
]
@NgModule({
  imports: [
    BannerModule,
    CommonModule,
    FeedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [GlobalFeedComponent],
})
export class GlobalFeedModule {}
