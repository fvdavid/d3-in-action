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
                path: 'echarts',
                loadChildren: () => import('./app/echarts/echarts.routes')
            },
            {
                path: 'ag-grid',
                loadChildren: () => import('./app/ag-grid/ag-grid.routes')
            },
            {
                path: 'plotlyjs',
                loadChildren: () => import('./app/plotlyjs/plotlyjs.module').then((p) => p.PlotlyjsModule)
            },
            {
                path: 'ng-three',
                // loadComponent: () => import('./app/experience/stars/stars.component').then((s) => s.StarsComponent),
                loadChildren: () => import('./app/threejs/threejs.routes'),
                data: {
                    credits: {
                        title: 'Stars',
                        link: 'https://pmndrs.github.io/examples/demos/gatsby-stars',
                        class: 'text-white'
                    }
                }
            }
        ]
    },
    { path: 'notfound', component: Notfound },
    { path: '**', redirectTo: '/notfound' }
];
