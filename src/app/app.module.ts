import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { CryptComponent } from './crypt/crypt.component';
import { DecryptComponent } from './decrypt/decrypt.component';
import { AboutComponent } from './about/about.component';
import { DevelopersComponent } from './developers/developers.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {FormsModule} from '@angular/forms';

const appRoutes = [
  {path: ``, redirectTo: '/registration', pathMatch: 'full'},
  {path: `registration`, component: RegistrationComponent},
  {path: `crypt`, component: CryptComponent},
  {path: `decrypt`, component: DecryptComponent},
  {path: `about`, component: AboutComponent},
  {path: `developers`, component: DevelopersComponent},
  {path: `**`, component: PageNotFoundComponent}

];


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    CryptComponent,
    DecryptComponent,
    AboutComponent,
    DevelopersComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
