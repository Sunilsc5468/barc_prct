import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesComponent } from './countries/countries.component';
import { SummaryComponent } from './summary/summary.component';
import { DataTablesModule } from 'angular-datatables';
import { NgxUiLoaderConfig, NgxUiLoaderModule, SPINNER } from 'ngx-ui-loader';
import { AppRoutingModule } from '../app-routing.module';
import { NgChartsModule } from 'ng2-charts';
import { NgApexchartsModule } from 'ng-apexcharts';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  fgsColor: '#D28283',
  bgsColor: '#FFF',
  overlayColor: 'rgb(255, 255, 255,.8)',
  pbColor: '#D28283',
  fgsSize: 40,
  fgsType: SPINNER.ballScaleMultiple,
  pbThickness: 2,
};

@NgModule({
  declarations: [
    CountriesComponent,
    SummaryComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    AppRoutingModule, 
    NgChartsModule,
    NgApexchartsModule
  ]
})
export class PagesModule { }
