import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { UserComponent } from './user/user.component';
import { UserDASHBOARDComponent } from './user-dashboard/user-dashboard.component';
import { FormsModule } from '@angular/forms'; // <-- Add this line
@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    DashboardLayoutComponent,
    UserComponent,
    UserDASHBOARDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
