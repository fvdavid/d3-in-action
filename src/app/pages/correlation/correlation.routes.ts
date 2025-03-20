import { Routes } from '@angular/router';

export default [
    {
        path: 'scatter-plot',
        loadComponent: () => import('../correlation/scatterplot/scatterplot.component').then((s) => s.ScatterplotComponent)
    },
    {
        path: 'heatmap',
        loadComponent: () => import('../correlation/heatmap/heatmap.component').then((h) => h.HeatmapComponent)
    },
    {
        path: 'correlogram',
        loadComponent: () => import('../correlation/correlogram/correlogram.component').then((c) => c.CorrelogramComponent)
    },
    {
        path: 'bubble',
        loadComponent: () => import('../correlation/bubble/bubble.component').then((b) => b.BubbleComponent)
    },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
