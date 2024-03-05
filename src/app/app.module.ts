import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';
import { authConfig } from './auth-config';
import { ButtonModule } from 'primeng/button';
@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    OAuthModule.forRoot({
      resourceServer: {
        allowedUrls: ['https://api.example.com'],
        sendAccessToken: true,
      },
      ...authConfig,
    }),
    // Button
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
