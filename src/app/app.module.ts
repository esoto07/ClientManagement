import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './shared/customers/customers.component';
import { SharedModule } from './shared/shared.module';
import { reducers } from './state/app.state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    ReactiveFormsModule,
    StoreDevtoolsModule.instrument({
      name: 'CustomerDevTools',
      maxAge: 25
    })
    // SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
