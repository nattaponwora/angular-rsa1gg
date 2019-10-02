import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

// Add Module
import { AppRoutingModule } from './app-routing.module';

// Add material
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule, MatTableModule } from  '@angular/material';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports:      [ 
      BrowserModule, 
      FormsModule,
      AppRoutingModule, 
      MatToolbarModule, 
      MatIconModule, 
      MatSidenavModule, 
      MatListModule, 
      MatButtonModule, 
      MatTableModule,
  ],
  declarations: [ AppComponent, HelloComponent, LoginComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
