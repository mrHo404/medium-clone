import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {RouterModule} from '@angular/router'

import {FeedTabsComponent} from './components/feedTabs/feedTabs.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [FeedTabsComponent],
  exports: [FeedTabsComponent],
})
export class FeedTabsModule {}
