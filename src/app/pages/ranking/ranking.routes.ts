import { Routes } from '@angular/router';

export default [
    {
        path: 'barchart',
        loadComponent: () => import('./barchart/barchart.component').then((b) => b.BarchartComponent)
    },
    {
        path: 'lollipop',
        loadComponent: () => import('./lollipop/lollipop.component').then((l) => l.LollipopComponent)
    },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
