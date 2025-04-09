import { ICellRendererParams } from 'ag-grid-community';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
    selector: 'app-mission-result',
    imports: [],
    template: `
        <span>
            @if (value()) {
                <img [alt]="value()" [src]="'https://www.ag-grid.com/example-assets/icons/' + value() + '.png'" [height]="30" />
            }
        </span>
    `,
    styles: ['img { width: auto; height: auto; } span {display: flex; height: 100%; justify-content: center; align-items: center} '],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MissionResultComponent implements ICellRendererAngularComp {
    value = signal('');
    agInit(params: ICellRendererParams): void {
        this.refresh(params);
    }

    refresh(params: ICellRendererParams): boolean {
        this.value.set(params.value ? 'tick-in-circle' : 'cross-in-circle');
        return true;
    }
}
