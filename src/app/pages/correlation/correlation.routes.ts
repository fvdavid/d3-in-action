import { Routes } from '@angular/router';

export default [
    {
        path: 'violin',
        loadComponent: () => import('./violin/violin.component').then((v) => v.ViolinComponent)
    },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
