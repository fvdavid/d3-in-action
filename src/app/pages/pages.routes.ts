import { Routes } from '@angular/router';

export default [
    {
        path: 'correlation',
        loadChildren: () => import('./correlation/correlation.routes')
    },
    {
        path: 'ranking',
        loadChildren: () => import('./ranking/ranking.routes')
    },
    {
        path: 'pow',
        loadChildren: () => import('./pow/pow.routes')
    },
    {
        path: 'diagrams',
        loadChildren: () => import('./diagrams/diagrams.routes')
    },
    {
        path: '**',
        redirectTo: '/notfound'
    }
] as Routes;
