import { Routes } from '@angular/router';

export default [
    {
        path: 'basic',
        loadComponent: () => import('./ckeditor/ckeditor.component').then((t) => t.CkeditorComponent)
    },
    {
        path: 'email-premium',
        loadComponent: () => import('./email-premium/email-premium.component').then((e) => e.EmailPremiumComponent)
    },
    {
        path: '**',
        redirectTo: '/notfound'
    }
] as Routes;
