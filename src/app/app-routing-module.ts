import {HomeComponent} from './home/home.component';
import {UsersComponent} from './users/users.component';
import {UserComponent} from './users/user/user.component';
import {ServersComponent} from './servers/servers.component';
import {ServerComponent} from './servers/server/server.component';
import {EditServerComponent} from './servers/edit-server/edit-server.component';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AuthGuardService} from './auth-guard-service';
import {CanDeactivateGuard} from './servers/edit-server/can-decativate-guard.service';
import {ErrorPageComponent} from './error-page/error-page.component';

const appRoutes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UsersComponent, children: [
      {path: ':id/:name', component: UserComponent}
    ]},
  {path: 'servers', canActivateChild: [AuthGuardService] , component: ServersComponent, children: [
      {path: ':id', component: ServerComponent},
      {path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard]}
    ]},
  {path: '**', component: ErrorPageComponent, data: {errorMassage: 'notFound'}},
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
