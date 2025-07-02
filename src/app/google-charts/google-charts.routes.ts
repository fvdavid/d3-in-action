import { Routes } from '@angular/router';

export default [
    {
        path: 'google-pie',
        loadComponent: () => import('./google-pie/google-pie.component').then((p) => p.GooglePieComponent)
    },
    {
        path: 'google-geo',
        loadComponent: () => import('./google-geo/google-geo.component').then((p) => p.GoogleGeoComponent)
    }
] as Routes;
