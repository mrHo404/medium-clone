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
import {ArticleService as SharedArticleService} from '../shared/services'
import {ArticleComponent} from './components/article/article.component'
import {ArticleService} from './services'
import {DeleteArticleEffect, GetArticleEffect} from './store/effects'
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
    EffectsModule.forFeature([GetArticleEffect, DeleteArticleEffect]),
    ErrorMessageModule,
    LoadingModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('article', reducers),
    TagListModule,
  ],
  declarations: [ArticleComponent],
  providers: [ArticleService, SharedArticleService],
})
export class ArticleModule {}
