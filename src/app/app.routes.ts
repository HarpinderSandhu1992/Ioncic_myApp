import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'groceries',
    loadComponent: () =>
      import('./pages/groceries/groceries.page').then((m) => m.GroceriesPage),
  },
  {
    path: 'electricity',
    loadComponent: () =>
      import('./pages/electricity/electricity.page').then(
        (m) => m.ElectricityPage
      ),
  },
  {
    path: 'college',
    loadComponent: () =>
      import('./pages/college/college.page').then((m) => m.CollegePage),
  },
  {
    path: 'others',
    loadComponent: () =>
      import('./pages/others/others.page').then((m) => m.OthersPage),
  },
];
