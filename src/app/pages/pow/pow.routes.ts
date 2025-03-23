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
    {
        path: 'pie',
        loadComponent: () => import('./pie/pie.component').then((p) => p.PieComponent)
    },
    {
        path: 'dendrogram',
        loadComponent: () => import('./dendrogram/dendrogram.component').then((d) => d.DendrogramComponent)
    },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
