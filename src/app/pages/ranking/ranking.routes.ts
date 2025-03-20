import { Routes } from '@angular/router';

export default [
    {
        path: 'scatter-plot',
        loadComponent: () => import('./scatterplot/scatterplot.component').then((s) => s.ScatterplotComponent)
    },
    {
        path: 'heatmap',
        loadComponent: () => import('./heatmap/heatmap.component').then((h) => h.HeatmapComponent)
    },
    {
        path: 'correlogram',
        loadComponent: () => import('./correlogram/correlogram.component').then((c) => c.CorrelogramComponent)
    },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
