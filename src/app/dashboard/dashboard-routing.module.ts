import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from '../layout/dashboard-layout/dashboard-layout.component';


const routes: Routes = [
  {path:'',component:DashboardLayoutComponent, children:[
    {
      path:'dashoard',component:DashboardLayoutComponent
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
