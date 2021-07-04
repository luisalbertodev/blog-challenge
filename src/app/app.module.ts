import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ToastrModule } from 'ngx-toastr';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from '@env/environment';
import { LayoutComponent } from '@app/layout/layout.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [AppComponent, LayoutComponent],
  imports: [
    FormsModule,
    SharedModule,
    BrowserModule,

    HttpClientModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
