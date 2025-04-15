import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgtCanvas } from 'angular-three';
import { StarsGraphComponent } from './stars-graph/stars-graph.component';

@Component({
    selector: 'app-stars',
    imports: [NgtCanvas],
    templateUrl: './stars.component.html',
    styleUrl: './stars.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: { class: 'stars-soba' }
})
export class StarsComponent {
    protected sceneGraph = StarsGraphComponent;
}
