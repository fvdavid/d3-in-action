import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
    selector: 'app-company-logo',
    imports: [],
    template: `
        <span>
            @if (value()) {
                <img [alt]="value()" [src]="'https://www.ag-grid.com/example-assets/space-company-logos/' + lowercase() + '.png'" />
                <p>{{ value() }}</p>
            }
        </span>
    `,
    styles: [
        'img {display: block; width: 25px; height: auto; max-height: 50%; margin-right: 12px; filter: brightness(1.2);} span {display: flex; height: 100%; width: 100%; align-items: center} p { text-overflow: ellipsis; overflow: hidden; white-space: nowrap }'
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyLogoComponent implements ICellRendererAngularComp {
    value = signal('');
    lowercase = computed(() => this.value().toLowerCase());

    agInit(params: ICellRendererParams): void {
        this.refresh(params);
    }

    refresh(params: ICellRendererParams): boolean {
        this.value.set(params.value);
        return true;
    }
}
