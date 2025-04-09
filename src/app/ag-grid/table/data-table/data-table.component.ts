import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

import { AgGridAngular } from 'ag-grid-angular';

import type { CellValueChangedEvent, ColDef, GridReadyEvent, ICellRendererParams, RowSelectionOptions, SelectionChangedEvent, ValueFormatterParams } from 'ag-grid-community';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import { CompanyLogoComponent } from '../renderers/company-logo/company-logo.component';
import { MissionResultComponent } from '../renderers/mission-result/mission-result.component';

ModuleRegistry.registerModules([AllCommunityModule]);

// Row Data Interface
interface IRow {
    mission: string;
    company: string;
    location: string;
    date: string;
    time: string;
    rocket: string;
    price: number;
    successful: boolean;
}

@Component({
    selector: 'app-data-table',
    imports: [AgGridAngular],
    templateUrl: './data-table.component.html',
    styleUrl: './data-table.component.scss'
})
export class DataTableComponent {
    // Return formatted date value
    dateFormatter(params: ValueFormatterParams) {
        return new Date(params.value).toLocaleDateString('en-us', {
            weekday: 'long',
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    }

    // Row Data: The data to be displayed.
    rowData: IRow[] = [];

    // Column Definitions: Defines & controls grid columns.
    colDefs: ColDef[] = [
        {
            field: 'mission',
            width: 150
        },
        {
            field: 'company',
            width: 130,
            cellRenderer: CompanyLogoComponent
        },
        {
            field: 'location',
            width: 225
        },
        {
            field: 'date',
            valueFormatter: this.dateFormatter
        },
        {
            field: 'price',
            width: 130,
            valueFormatter: (params) => {
                return '£' + params.value.toLocaleString();
            }
        },
        {
            field: 'successful',
            width: 120,
            cellRenderer: MissionResultComponent
        },
        { field: 'rocket' }
    ];

    rowSelection: RowSelectionOptions = {
        mode: 'multiRow',
        headerCheckbox: false
    };

    // Default Column Definitions: Apply configuration across all columns
    defaultColDef: ColDef = {
        filter: true, // Enable filtering on all columns
        editable: true // Enable editing on all columns
    };

    private http = inject(HttpClient);

    // Load data into grid when ready
    constructor() {}
    onGridReady(params: GridReadyEvent) {
        this.http.get<any[]>('https://www.ag-grid.com/example-assets/space-mission-data.json').subscribe((data) => (this.rowData = data));
    }

    // Handle row selection changed event
    onSelectionChanged = (event: SelectionChangedEvent) => {
        console.log('Row Selected!');
    };

    // Handle cell editing event
    onCellValueChanged = (event: CellValueChangedEvent) => {
        console.log(`New Cell Value: ${event.value}`);
    };
}
