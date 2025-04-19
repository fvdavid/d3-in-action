import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgtCanvas } from 'angular-three';
import { SceneGraphComponent } from '../scene-graph/scene-graph.component';

@Component({
    selector: 'app-box',
    imports: [NgtCanvas],
    template: `
        <div class="w-full h-full flex justify-center items-center bg-gray-900">
            <ngt-canvas [sceneGraph]="sceneGraph" [position]="[1.5, 0, 0]" />
            <ngt-canvas [sceneGraph]="sceneGraph" [position]="[-1.5, 0, 0]" />
        </div>
    `,
    styles: [
        `
            :host {
                display: block;
                height: 70dvh;
            }
        `
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BoxComponent {
    protected sceneGraph = SceneGraphComponent;
}
