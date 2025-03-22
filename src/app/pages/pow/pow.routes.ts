import { Routes } from '@angular/router';

export default [
    {
        path: 'treemap',
        loadComponent: () => import('./treemap/treemap.component').then((t) => t.TreemapComponent)
    },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
