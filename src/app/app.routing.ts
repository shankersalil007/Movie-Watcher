import { RouterModule, Routes } from '@angular/router';
import { MovListComponent } from './mov-list.component';

const appRoutes: Routes = [
  {
    path: 'add',
    loadChildren: () =>
      import('./new-item/new-item.module').then((m) => m.NewItemModule),
  },
  { path: ':category', component: MovListComponent },
  { path: '', redirectTo: 'All', pathMatch: 'full' },
];

export const routing = RouterModule.forRoot(appRoutes);
