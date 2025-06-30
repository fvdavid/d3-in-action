import { Routes } from '@angular/router';

export default [
    {
        path: 'sankey',
        loadComponent: () => import('./sankey/sankey.component').then((s) => s.SankeyComponent)
    },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
