import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {EffectsModule} from '@ngrx/effects'
import {StoreModule} from '@ngrx/store'

import {ArticleFormModule} from '../shared/modules'
import {CreateArticleComponent} from './components/createArticle/createArticle.component'
import {CreateArticleService} from './services'
import {CreateArticleEffect} from './store/effects'
import {reducers} from './store/reducers'

const routes: Routes = [
  {
    path: 'articles/new',
    component: CreateArticleComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    ArticleFormModule,
    EffectsModule.forFeature([CreateArticleEffect]),
    RouterModule.forChild(routes),
    StoreModule.forFeature('createArticle', reducers),
  ],
  declarations: [CreateArticleComponent],
  providers: [CreateArticleService],
})
export class CreateArticleModule {}
