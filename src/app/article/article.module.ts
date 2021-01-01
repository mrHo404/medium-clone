import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {EffectsModule} from '@ngrx/effects'
import {StoreModule} from '@ngrx/store'

import {
  ErrorMessageModule,
  LoadingModule,
  TagListModule,
} from '../shared/modules'
import {ArticleService} from '../shared/services'
import {ArticleComponent} from './components/article/article.component'
import {GetArticleEffect} from './store/effects'
import {reducers} from './store/reducers'

const routes: Routes = [
  {
    path: 'articles/:slug',
    component: ArticleComponent,
  },
]
@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetArticleEffect]),
    ErrorMessageModule,
    LoadingModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('article', reducers),
    TagListModule,
  ],
  declarations: [ArticleComponent],
  providers: [ArticleService],
})
export class ArticleModule {}
