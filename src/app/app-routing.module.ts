import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';

const routes: Routes = [
  {path:'', component: DashboardLayoutComponent ,  

children:[
   {path:'dashboard',
  redirectTo:'./dashboard',
  pathMatch:'full'
  },
   {path:'dashboard',
    loadChildren:() => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  }
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
