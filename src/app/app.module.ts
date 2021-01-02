import {BrowserModule} from '@angular/platform-browser'
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import {NgModule} from '@angular/core'
import {StoreModule} from '@ngrx/store'
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import {EffectsModule} from '@ngrx/effects'
import {routerReducer, StoreRouterConnectingModule} from '@ngrx/router-store'

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {ArticleModule} from './article/article.module'
import {AuthModule} from './auth/auth.module'
import {environment} from 'src/environments/environment'
import {HeaderModule} from './shared/modules'
import {AuthInterceptor, PersistanceService} from './shared/services'
import {GlobalFeedModule} from './globalFeed/globalFeed.module'
import {YourFeedFeedModule} from './yourFeed/yourFeed.module'
import {TagFeedModule} from './tagFeed/tagFeed.module'
import {CreateArticleModule} from './createArticle/createArticle.module'
import {EditArticleModule} from './editArticle/editArticle.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    CreateArticleModule,
    EditArticleModule,
    EffectsModule.forRoot([]),
    GlobalFeedModule,
    HeaderModule,
    HttpClientModule,
    StoreModule.forRoot({router: routerReducer}),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    TagFeedModule,
    YourFeedFeedModule,
    //articleModule needs to be imported after createArticleModule as route "new" is also a slug
    ArticleModule,
  ],
  providers: [
    PersistanceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
