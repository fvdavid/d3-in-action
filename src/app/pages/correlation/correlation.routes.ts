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
    {
        path: 'bubble',
        loadComponent: () => import('./bubble/bubble.component').then((b) => b.BubbleComponent)
    },
    {
        path: 'density',
        loadComponent: () => import('./density/density.component').then((d) => d.DensityComponent)
    },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
