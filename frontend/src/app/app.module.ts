import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // ✅ Ensure RouterModule is imported
import { AppRoutingModule } from './app.routes'; // ✅ Import AppRoutingModule
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';
import path from 'path';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule // ✅ Ensure routing module is added
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
