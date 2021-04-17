
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgwWowModule } from 'ngx-wow';
import { SideNavComponent } from './visitor/shared/side-nav/side-nav.component';
import { RouterModule } from '@angular/router';
import { SpyAnchorDirective } from './spy-anchor.directive';
import { SpyAreaForDirective } from './spy-area-for.directive';
import { SpyScrollContainerDirective } from './spy-scroll-container.directive';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    SpyScrollContainerDirective,
    SpyAreaForDirective,
    SpyAnchorDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FontAwesomeModule,
    NgwWowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
