import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from '@auth0/auth0-angular';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ActivityAddComponent} from './components/activities/activity-add/activity-add.component';
import {ActivitiesListComponent} from './components/activities/activities-list/activities-list.component';
import {ActivityEditComponent} from './components/activities/activity-edit/activity-edit.component';
import {DashboardContainerComponent} from './components/dashboard/dashboard-container/dashboard-container.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'activities', component: ActivitiesListComponent, canActivate: [AuthGuard]},
  { path: 'activity/add/:name', component: ActivityAddComponent, canActivate: [AuthGuard]},
  { path: 'activity/edit/:id', component: ActivityEditComponent, canActivate: [AuthGuard]},

  { path: '', component: HomeComponent},
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
