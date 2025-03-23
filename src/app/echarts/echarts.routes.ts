import { Routes } from '@angular/router';

export default [
    {
        path: 'graph',
        loadComponent: () => import('./graph/graph.component').then((g) => g.GraphComponent)
    },
    {
        path: '**',
        redirectTo: '/notfound'
    }
] as Routes;
