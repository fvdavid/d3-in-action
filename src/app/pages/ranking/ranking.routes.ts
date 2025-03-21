import { Routes } from '@angular/router';

export default [
    {
        path: 'barchart',
        loadComponent: () => import('./barchart/barchart.component').then((b) => b.BarchartComponent)
    },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
