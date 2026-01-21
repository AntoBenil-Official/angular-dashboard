import { Routes } from '@angular/router';
import { Layout } from './shared/layout/layout';
import { Dashboard } from './features/dashboard/dashboard';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: '', component: Dashboard }
    ]
  }
];