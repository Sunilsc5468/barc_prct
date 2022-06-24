import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './pages/countries/countries.component';
import { SummaryComponent } from './pages/summary/summary.component';

const routes: Routes = [
  { path: '', redirectTo: '/country', pathMatch: 'full' },
  { path: 'country', component: CountriesComponent },
  { path: 'Summary', component: SummaryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
