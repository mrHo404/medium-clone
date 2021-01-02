import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {EffectsModule} from '@ngrx/effects'
import {StoreModule} from '@ngrx/store'

import {EditArticleComponent} from './components/createArticle/editArticle.component'
import {ArticleFormModule, LoadingModule} from '../shared/modules'
import {ArticleService as SharedArticleService} from '../shared/services'
import {EditArticleService} from './services'
import {GetArticleEffect, UpdateArticleEffect} from './store/effects'
import {reducers} from './store/reducers'

const routes: Routes = [
  {
    path: 'articles/:slug/edit',
    component: EditArticleComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    ArticleFormModule,
    EffectsModule.forFeature([GetArticleEffect, UpdateArticleEffect]),
    LoadingModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('editArticle', reducers),
  ],
  declarations: [EditArticleComponent],
  providers: [EditArticleService, SharedArticleService],
})
export class EditArticleModule {}
