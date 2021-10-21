import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { AsideComponent } from './components/shared/aside/aside.component';
import { HomeComponent } from './components/home/home.component';
import { AuthModule } from '@auth0/auth0-angular';
import { LoginButtonComponent } from './components/shared/login-button/login-button.component';
import { MatButtonModule} from '@angular/material/button';
import { LogoutButtonComponent } from './components/shared/logout-button/logout-button.component';
import { SignupButtonComponent } from './components/shared/signup-button/signup-button.component';
import  {MatIconModule} from '@angular/material/icon';
import { MatListModule} from '@angular/material/list';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import { SettingsUserComponent } from './components/settings-user/settings-user.component';
import { SettingsImportComponent } from './components/settings-import/settings-import.component';
import { SettingsActivityFieldsComponent } from './components/settings-activity-fields/settings-activity-fields.component';
import { ActivitiesImportComponent } from './components/activities-import/activities-import.component';
import { ActivitiesListComponent } from './components/activities-list/activities-list.component';
import { MatCardModule} from '@angular/material/card';
import { MatRadioModule} from '@angular/material/radio';
import { MatInputModule} from '@angular/material/input';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatTableModule} from '@angular/material/table';
import { TableActivityFieldsUnityComponent } from './components/shared/table-activity-fields-unity/table-activity-fields-unity.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { SettingsUserActivitiesComponent } from './components/settings-user-activities/settings-user-activities.component';
import { ActivitiesComponent } from './admin/activities/activities.component';
import { FieldstypeComponent } from './admin/fieldstype/fieldstype.component';
import { AdminActivitiesComponent } from './admin/admin-activities/admin-activities.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatBottomSheet, MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { MybottomsheetFormComponent } from './components/shared/mybottomsheet-form/mybottomsheet-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AsideComponent,
    HomeComponent,
    LoginButtonComponent,
    LogoutButtonComponent,
    SignupButtonComponent,
    SettingsUserComponent,
    SettingsImportComponent,
    SettingsActivityFieldsComponent,
    ActivitiesImportComponent,
    ActivitiesListComponent,
    DashboardComponent,
    TableActivityFieldsUnityComponent,
    SettingsUserActivitiesComponent,
    ActivitiesComponent,
    FieldstypeComponent,
    AdminActivitiesComponent,
    MybottomsheetFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule.forRoot({
      domain: 'YOUR_DOMAIN',
      clientId: 'YOUR_CLIENT_ID'
    }),
    MatButtonModule,
    MatIconModule,
    MatListModule,
    FontAwesomeModule,
    MatSlideToggleModule,
    MatCardModule,
    MatRadioModule, 
    MatInputModule,
    MatTableModule,
    FormsModule,
    DragDropModule,
    HttpClientModule,
    MatToolbarModule,
    MatBottomSheetModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
