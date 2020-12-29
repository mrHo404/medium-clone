import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {ReactiveFormsModule} from '@angular/forms'
import {RouterModule, Routes} from '@angular/router'
import {EffectsModule} from '@ngrx/effects'
import {StoreModule} from '@ngrx/store'

import {BackendErrorMessagesModule} from '../shared/modules'
import {PersistanceService} from '../shared/services'
import {LoginComponent, RegisterComponent} from './components'
import {AuthService} from './services'
import {LoginEffect, RegisterEffect} from './store/effects'
import {reducers} from './store/reducers'

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    BackendErrorMessagesModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffect, LoginEffect]),
  ],
  declarations: [RegisterComponent, LoginComponent],
  providers: [AuthService, PersistanceService],
})
export class AuthModule {}
