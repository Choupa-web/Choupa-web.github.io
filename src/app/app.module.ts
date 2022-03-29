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
import { MatIconModule} from '@angular/material/icon';
import { MatListModule} from '@angular/material/list';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatCardModule} from '@angular/material/card';
import { MatRadioModule} from '@angular/material/radio';
import { MatInputModule} from '@angular/material/input';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatTableModule } from '@angular/material/table';
import { DragDropModule} from '@angular/cdk/drag-drop';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { AuthNavComponent } from './components/auth-nav/auth-nav.component';
import {environment, environment as env} from '../environments/environment';
import { FlexModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ActivityAddComponent } from './components/activities/activity-add/activity-add.component';
import { ActivitiesListComponent } from './components/activities/activities-list/activities-list.component';
import { MatSelectModule } from '@angular/material/select';
import { ReplaceCommaByDotInCtrlDirective } from './directives/replace-comma-bydot-in-ctrl.directive';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { AlertComponent } from './components/shared/alert/alert.component';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule } from '@angular/material/snack-bar';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { ActivityEditComponent } from './components/activities/activity-edit/activity-edit.component';
import {MatDialogModule} from '@angular/material/dialog';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { HometrainerActivityFormComponent } from './components/activities/hometrainer-activity-form/hometrainer-activity-form.component';
import { VttActivityFormComponent } from './components/activities/vtt-activity-form/vtt-activity-form.component';
import { RowerActivityFormComponent } from './components/activities/rower-activity-form/rower-activity-form.component';
import { ActivitiesDynamicFormComponent } from './components/activities/activities-dynamic-form/activities-dynamic-form.component';


registerLocaleData(localeFr, 'fr');

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
    DashboardComponent,
    AuthNavComponent,
    ActivityAddComponent,
    ActivitiesListComponent,
    ReplaceCommaByDotInCtrlDirective,
    AlertComponent,
    ActivityEditComponent,
    HometrainerActivityFormComponent,
    VttActivityFormComponent,
    RowerActivityFormComponent,
    ActivitiesDynamicFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule.forRoot({ ...env.auth }),
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
    ReactiveFormsModule,
    FlexModule,
    MatSidenavModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatDialogModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' },
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
