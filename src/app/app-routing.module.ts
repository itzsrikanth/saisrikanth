import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {OnboardingComponent} from './pages/onboarding/onboarding.component';

const routes: Routes = [{
  path: '',
  component: DashboardComponent
}, {
  path: 'onboarding',
  component: OnboardingComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
