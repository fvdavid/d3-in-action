import { Routes } from '@angular/router';

export default [
    {
        path: 'graph',
        loadComponent: () => import('./graph/graph.component').then((g) => g.GraphComponent)
    },
    {
        path: 'heatmap',
        loadComponent: () => import('./heatmap/heatmap.component').then((h) => h.HeatmapComponent)
    },
    {
        path: 'gauge',
        loadComponent: () => import('./gauge/gauge.component').then((g) => g.GaugeComponent)
    },
    {
        path: 'graphic',
        loadComponent: () => import('./graphic/graphic.component').then((gr) => gr.EcGraphicComponent)
    },
    {
        path: '**',
        redirectTo: '/notfound'
    }
] as Routes;
