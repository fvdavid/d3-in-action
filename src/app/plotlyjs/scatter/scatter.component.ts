import { Component } from '@angular/core';

@Component({
    selector: 'app-scatter',
    templateUrl: './scatter.component.html',
    styleUrl: './scatter.component.scss',
    standalone: false
})
export class ScatterComponent {
    public graph = {
        data: [
            { x: [1, 2, 3], y: [2, 6, 3], type: 'scatter', mode: 'lines+points', marker: { color: '#12b981' } },
            { x: [1, 2, 3], y: [2, 5, 3], type: 'bar', marker: { color: '#45b4906b' } }
        ],
        layout: { autosize: true, title: 'A Fancy Plot' }
    };

    // public graph = {
    //     data: [{ x: [1, 2, 3], y: [2, 5, 3], type: 'bar' }],
    //     layout: {autosize: true, title: 'A Fancy Plot'},
    // };
}
