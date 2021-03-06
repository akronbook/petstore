import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { PetComponent } from './pet/pet.component';
import { RewardsComponent } from './rewards/rewards.component';
import { SalesComponent } from './sales/sales.component';


const routes: Routes = [
  { path: 'pets', component: PetComponent },
  { path: 'rewards', component: RewardsComponent },
  { path: 'sales', component: SalesComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
