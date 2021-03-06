import { AuthGuard } from './auth/guards/auth.guard';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// Page Layouts
import { PageLayoutFullscreenComponent } from './page-layouts/fullscreen/fullscreen.component';

const AppRoutes: Routes = [
  { path: '', redirectTo: '/app/dashboard', pathMatch: 'full' },
  { path: 'app', component: LayoutComponent, canActivate: [AuthGuard] },
  { path: 'extra', loadChildren: './extra-pages/extra-pages.module#ExtraPagesModule' },
  { path: 'auth', loadChildren: './auth/authentication.module#AuthenticationModule' },
  { path: 'fullscreen', component: PageLayoutFullscreenComponent },
  { path: '**', redirectTo: '/app/dashboard', pathMatch: 'full' },
];

export const AppRoutingModule = RouterModule.forRoot(AppRoutes, {useHash: true});
