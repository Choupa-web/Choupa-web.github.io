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
import { MatTableModule} from '@angular/material/table';
import { DragDropModule} from '@angular/cdk/drag-drop';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { AuthNavComponent } from './components/auth-nav/auth-nav.component';
import { environment as env } from '../environments/environment';
import {FlexModule} from '@angular/flex-layout';

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
    AuthNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule.forRoot({...env.auth }),
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
    FlexModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
