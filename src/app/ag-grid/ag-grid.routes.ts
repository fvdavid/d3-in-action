import { Routes } from '@angular/router';

export default [
    {
        path: 'table',
        loadComponent: () => import('./table/data-table/data-table.component').then((t) => t.DataTableComponent)
    },
    {
        path: '**',
        redirectTo: '/notfound'
    }
] as Routes;
