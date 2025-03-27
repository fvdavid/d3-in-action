import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { register } from 'swiper/element/bundle';
register();

@Component({
    selector: 'app-dashboard',
    imports: [],
    template: `
        <swiper-container class="mySwiper mt-40" pagination="true" loop="true" pagination-clickable="true" autoplay-delay="2500" autoplay-disable-on-interaction="false">
            @for (i of theVisualLibraries; track $index) {
                <swiper-slide>
                    <div class="grid grid-cols-6 mt-20 gap-4 mb-20">
                        <div class="col-span-4 col-start-2">
                            <div class="mb-0">
                                <div class="flex justify-between items-center mb-4">
                                    <div>
                                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">
                                            <p class="text-4xl">
                                                {{ i.description }}
                                            </p>
                                        </div>
                                    </div>
                                    <div class="flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-border" style="width: 7rem; height: 7rem">
                                        <img [src]="i.imgUrl" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            }
        </swiper-container>
    `,
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Dashboard {
    theVisualLibraries = [
        {
            name: 'd3js',
            description: 'The JavaScript library for bespoke data visualization',
            imgUrl: 'https://d3js.org/logo.svg'
        },
        {
            name: 'Apache ECharts',
            description: 'An Open Source JavaScript Visualization Library',
            imgUrl: 'https://echarts.apache.org/en/images/logo.png'
        }
    ];
}
