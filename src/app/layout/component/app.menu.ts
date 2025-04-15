import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule],
    template: `
        <ul class="layout-menu">
            <ng-container *ngFor="let item of model; let i = index">
                <li app-menuitem *ngIf="!item.separator" [item]="item" [index]="i" [root]="true"></li>
                <li *ngIf="item.separator" class="menu-separator"></li>
            </ng-container>
        </ul>
    `
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
                        // icon: 'pi pi-fw pi-home',
                        items: [
                            {
                                label: 'Scatter',
                                // icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['pages/correlation/scatter-plot']
                            },
                            {
                                label: 'Heatmap',
                                // icon: 'pi pi-fw pi-times-circle',
                                routerLink: ['pages/correlation/heatmap']
                            },
                            {
                                label: 'Correlogram',
                                // icon: 'pi pi-fw pi-lock',
                                routerLink: ['pages/correlation/correlogram']
                            },
                            {
                                label: 'Bubble',
                                // icon: 'pi pi-fw pi-times-circle',
                                routerLink: ['pages/correlation/bubble']
                            },
                            {
                                label: 'Density 2d',
                                // icon: 'pi pi-fw pi-lock',
                                routerLink: ['pages/correlation/density']
                            }
                        ]
                    },
                    {
                        label: 'Ranking',
                        // icon: 'pi pi-fw pi-home',
                        items: [
                            {
                                label: 'Scatter',
                                // icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['pages/ranking/barchart']
                            },
                            {
                                label: 'Lollipop',
                                // icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['pages/ranking/lollipop']
                            },
                            {
                                label: 'Circular',
                                // icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['pages/ranking/circular']
                            }
                        ]
                    },
                    {
                        label: 'Part of a whole',
                        // icon: 'pi pi-fw pi-home',
                        items: [
                            {
                                label: 'Treemap',
                                // icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['pages/pow/treemap']
                            },
                            {
                                label: 'Doughnut',
                                // icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['pages/pow/doughnut']
                            },
                            {
                                label: 'Pie chart',
                                // icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['pages/pow/pie']
                            },
                            {
                                label: 'Dendrogram',
                                // icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['pages/pow/dendrogram']
                            }
                        ]
                    },
                    {
                        label: 'D3js Website',
                        // icon: 'pi pi-fw pi-sign-in',
                        url: 'https://d3js.org/',
                        target: '_blank'
                    }
                ]
            },

            {
                label: 'echarts',
                items: [
                    {
                        label: 'Graph',
                        // icon: 'pi pi-fw pi-sign-in',
                        routerLink: ['echarts/graph']
                    },
                    {
                        label: 'Heatmap',
                        // icon: 'pi pi-fw pi-sign-in',
                        routerLink: ['echarts/heatmap']
                    },
                    {
                        label: 'Gauge',
                        routerLink: ['echarts/gauge']
                    },
                    {
                        label: 'Graphic',
                        routerLink: ['echarts/graphic']
                    },
                    {
                        label: 'Sunburst',
                        routerLink: ['echarts/sunburst']
                    },
                    {
                        label: 'Funnel',
                        routerLink: ['echarts/funnel']
                    },
                    {
                        label: 'Echarts Website',
                        // icon: 'pi pi-fw pi-sign-in',
                        url: 'https://echarts.apache.org/en/index.html',
                        target: '_blank'
                    }
                ]
            },

            {
                label: 'Ag Grid',
                items: [
                    {
                        label: 'Table',
                        routerLink: ['/ag-grid/table']
                    },
                    {
                        label: 'Chart',
                        routerLink: ['/ag-grid/chart']
                    },
                    {
                        label: 'AG Grid Website',
                        // icon: 'pi pi-fw pi-sign-in',
                        url: 'https://www.ag-grid.com/',
                        target: '_blank'
                    }
                ]
            },

            {
                label: 'Threejs',
                items: [
                    {
                        label: 'Box',
                        routerLink: ['/ng-three/box']
                    },
                    {
                        label: 'Cube',
                        routerLink: ['/ng-three/cube']
                    },
                    {
                        label: 'AG Grid Website',
                        // icon: 'pi pi-fw pi-sign-in',
                        url: 'https://www.ag-grid.com/',
                        target: '_blank'
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
