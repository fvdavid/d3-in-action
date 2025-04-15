import { Routes } from '@angular/router';

export default [
    {
        path: 'box',
        loadComponent: () => import('./box/box.component').then((b) => b.BoxComponent)
    },
    {
        path: 'stars',
        loadComponent: () => import('./stars/stars.component').then((s) => s.StarsComponent)
    },
    {
        path: '**',
        redirectTo: '/notfound'
    }
] as Routes;
