import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Module Routing
import { RoutingModule } from 'src/app/pages/routing.module';

//Modules
import { SharedModule } from './../shared/shared.module';

//Pages
import { HomeComponent } from 'src/app/pages/home/home.component';
import { DetailsComponent } from 'src/app/pages/details/details.component';

@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
