import { Dashboard } from './app/pages/dashboard/dashboard';
import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';
import { Notfound } from './app/pages/notfound/notfound';

export const appRoutes: Routes = [
    {
        path: '',
        component: AppLayout,
        children: [
            { path: '', component: Dashboard },
            {
                path: 'pages',
                loadChildren: () => import('./app/pages/pages.routes')
            },
            {
                path: 'correlation',
                loadChildren: () => import('./app/pages/correlation/correlation.routes')
            },
            {
                path: 'ranking',
                loadChildren: () => import('./app/pages/ranking/ranking.routes')
            },
            {
                path: 'pow',
                loadChildren: () => import('./app/pages/pow/pow.routes')
            }
        ]
    },
    { path: 'notfound', component: Notfound },
    { path: '**', redirectTo: '/notfound' }
];
