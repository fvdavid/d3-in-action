import { Routes } from '@angular/router';

export default [
    {
        path: 'home',
        loadComponent: () => import('./home/home.component').then((h) => h.HomeComponent)
    },
    {
        path: 'box',
        loadComponent: () => import('./box/box.component').then((b) => b.BoxComponent)
    },
    {
        path: '**',
        redirectTo: '/notfound'
    }
] as Routes;
