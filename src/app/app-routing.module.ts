import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivitiesComponent } from './admin/activities/activities.component';
import { AdminActivitiesComponent } from './admin/admin-activities/admin-activities.component';
import { FieldstypeComponent } from './admin/fieldstype/fieldstype.component';
import { ActivitiesImportComponent } from './components/activities-import/activities-import.component';
import { ActivitiesListComponent } from './components/activities-list/activities-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { SettingsActivityFieldsComponent } from './components/settings-activity-fields/settings-activity-fields.component';
import { SettingsImportComponent } from './components/settings-import/settings-import.component';
import { SettingsUserComponent } from './components/settings-user/settings-user.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'dashboard', component: DashboardComponent},
  {path: 'userSettings', component: SettingsUserComponent},
  {path: 'importSettings', component: SettingsImportComponent},
  {path: 'fieldsSettings', component: SettingsActivityFieldsComponent},
  {path: 'importActivity', component: ActivitiesImportComponent},
  {path: 'viewActivity', component: ActivitiesListComponent},
  {path: 'adminActivities', component: AdminActivitiesComponent},
  {path: 'adminFields', component: FieldstypeComponent},
  {path:'', component:HomeComponent},
  {path:'**', component:HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
