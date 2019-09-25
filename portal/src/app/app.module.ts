import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// --- MODULES --- //
import {
  MaterialModule
} from './modules';

// --- COMPONENTS --- //
import {
  ToolbarComponent
} from './components';

// --- INTERCEPTORS --- //
import {
  HttpErrorInterceptor,
  HttpTokenInterceptor
} from './http-interceptors';

// --- PAGES --- //
import {
  AboutComponent,
  ContactComponent,
  HomeComponent,
  LoginComponent,
  ProfileComponent,
  SingleSpaComponent
} from './pages';

// --- PIPES --- //
import {
  CapitalizePipe
} from './pipes';

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    CapitalizePipe,
    ContactComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    ToolbarComponent,
    SingleSpaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
