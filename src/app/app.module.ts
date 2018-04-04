import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { MioComponentComponent } from './mio-component/mio-component.component';
import { SecondoComponent } from './secondo/secondo.component';
import { MioservizioService } from './shared/mioservizio.service';

const routes: Routes = [
  { path: 'pratiche',
    component: MioComponentComponent
  },
  { path: '',
    redirectTo: 'pratiche',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MioComponentComponent,
    SecondoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MioservizioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
