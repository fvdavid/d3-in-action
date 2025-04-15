import { Routes } from '@angular/router';

export default [
    {
        path: 'box',
        loadComponent: () => import('./box/box.component').then((b) => b.BoxComponent)
    },
    {
        path: '**',
        redirectTo: '/notfound'
    }
] as Routes;
