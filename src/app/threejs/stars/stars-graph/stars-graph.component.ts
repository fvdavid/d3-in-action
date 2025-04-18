import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, input, viewChild } from '@angular/core';
import { extend, injectBeforeRender } from 'angular-three';
import { NgtsOrbitControls } from 'angular-three-soba/controls';

import { NgtsPointMaterial } from 'angular-three-soba/materials';
import { NgtsPointsBuffer } from 'angular-three-soba/performances';
import { random } from 'maath';

@Component({
    selector: 'app-stars-graph',
    imports: [NgtsPointsBuffer, NgtsPointMaterial, NgtsOrbitControls],
    template: `
        <ngt-group [rotation]="[0, 0, Math.PI / 4]">
            <ngts-points-buffer [positions]="sphere" [stride]="3" [options]="{ frustumCulled: false }">
                <ngts-point-material [options]="{ transparent: true, color: '#ccc', size: 0.005, sizeAttenuation: true, depthWrite: false }" />
            </ngts-points-buffer>
        </ngt-group>

        @if (withEffect()) {
            <ngts-orbit-controls [options]="{ enableZoom: false, enablePan: false }" />
        }
    `,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class StarsGraphComponent {
    protected readonly Math = Math;
    protected readonly sphere = random.inSphere(new Float32Array(6000), { radius: 1.5 }) as Float32Array;

    private pointsBufferRef = viewChild.required(NgtsPointsBuffer);

    withEffect = input(true);

    constructor() {
        injectBeforeRender(({ delta }) => {
            const points = this.pointsBufferRef().pointsRef().nativeElement;
            points.rotation.x -= delta / 10;
            points.rotation.y -= delta / 15;
        });
    }
}
