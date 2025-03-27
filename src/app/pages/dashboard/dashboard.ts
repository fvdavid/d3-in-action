import { Component } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    imports: [],
    template: `
        <div class="grid grid-cols-6 gap-4 mt-60">
            <div class="col-span-4 col-start-2">
                <div class="mb-0">
                    <div class="flex justify-between items-center mb-4">
                        <div>
                            <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">
                                <p class="text-4xl">The JavaScript library for bespoke data visualization</p>
                            </div>
                        </div>
                        <div class="flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-border" style="width: 8rem; height: 8rem">
                            <img src="https://d3js.org/logo.svg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class Dashboard {}
