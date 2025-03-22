import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule],
    template: `<ul class="layout-menu">
        <ng-container *ngFor="let item of model; let i = index">
            <li app-menuitem *ngIf="!item.separator" [item]="item" [index]="i" [root]="true"></li>
            <li *ngIf="item.separator" class="menu-separator"></li>
        </ng-container>
    </ul> `
})
export class AppMenu {
    model: MenuItem[] = [];

    ngOnInit() {
        this.model = [
            {
                label: 'D3.js',
                items: [
                    {
                        label: 'Correlation',
                        icon: 'pi pi-fw pi-home',
                        items: [
                            {
                                label: 'Scatter',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/correlation/scatter-plot']
                            },
                            {
                                label: 'Heatmap',
                                icon: 'pi pi-fw pi-times-circle',
                                routerLink: ['/correlation/heatmap']
                            },
                            {
                                label: 'Correlogram',
                                icon: 'pi pi-fw pi-lock',
                                routerLink: ['/correlation/correlogram']
                            },
                            {
                                label: 'Bubble',
                                icon: 'pi pi-fw pi-times-circle',
                                routerLink: ['/correlation/bubble']
                            },
                            // {
                            //     label: 'Connected scatter',
                            //     icon: 'pi pi-fw pi-lock',
                            //     routerLink: ['/correlation-scatter']
                            // }
                            {
                                label: 'Density 2d',
                                icon: 'pi pi-fw pi-lock',
                                routerLink: ['/correlation/density']
                            }
                        ]
                    },
                    {
                        label: 'Ranking',
                        icon: 'pi pi-fw pi-home',
                        items: [
                            {
                                label: 'Scatter',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/ranking/barchart']
                            },
                            {
                                label: 'Lollipop',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/ranking/lollipop']
                            },
                            {
                                label: 'Circular',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/ranking/circular']
                            }
                        ]
                    },
                    {
                        label: 'Part of a whole',
                        icon: 'pi pi-fw pi-home',
                        items: [
                            {
                                label: 'Treemap',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/pow/treemap']
                            },
                            {
                                label: 'Doughnut',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/pow/doughnut']
                            },
                            {
                                label: 'Pie chart',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/pow/circular']
                            }

                            // Dendrogram
                            // Circular packing
                        ]
                    }
                ]
            },

            {
                label: 'Get Started',
                items: [
                    {
                        label: 'View Source',
                        icon: 'pi pi-fw pi-github',
                        url: 'https://github.com/fvdavid/d3-in-action',
                        target: '_blank'
                    }
                ]
            }
        ];
    }
}
