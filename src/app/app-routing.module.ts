import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { UserComponent } from './user/user.component';
import { UserDASHBOARDComponent } from './user-dashboard/user-dashboard.component';
import { ChildComponent } from './Practice/child/child.component';
import { ParentsComponent } from './Practice/parents/parents.component';

const routes: Routes = [
  {path:'child',component:ChildComponent},
  {path:'parents',component:ParentsComponent},
  /* dashboard */
  {
    path: '', component: DashboardLayoutComponent,

    children: [
      {
        path: 'dashboard',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  },

  /* auth */
  {
    path: '', component: AuthLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/auth',
        pathMatch: 'full'
      },
      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
      }
    ]
  },
  {path:'user',component:UserComponent},
  {path:'user-dashboard',component:UserDASHBOARDComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
