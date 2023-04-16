import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRatemeComponentComponent } from './app.rateme.component/app.rateme.component.component';
import { AppThankuComponentComponent } from './app.thanku.component/app.thanku.component.component';

const routes: Routes = [
  { path: '', component: AppRatemeComponentComponent },
  { path: 'Completed', component: AppThankuComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
