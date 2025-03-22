import { Routes } from '@angular/router';

export default [
    {
        path: 'treemap',
        loadComponent: () => import('./treemap/treemap.component').then((t) => t.TreemapComponent)
    },
    {
        path: 'doughnut',
        loadComponent: () => import('./doughnut/doughnut.component').then((d) => d.DoughnutComponent)
    },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
