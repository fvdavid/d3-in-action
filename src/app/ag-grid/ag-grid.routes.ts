import { Routes } from '@angular/router';

export default [
    {
        path: 'table',
        loadComponent: () => import('./table/data-table/data-table.component').then((t) => t.DataTableComponent)
    },
    {
        path: 'chart',
        loadComponent: () => import('./chart/chart.component').then((c) => c.ChartComponent)
    },
    {
        path: '**',
        redirectTo: '/notfound'
    }
] as Routes;
