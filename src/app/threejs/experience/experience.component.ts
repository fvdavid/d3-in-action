import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, viewChild } from '@angular/core';
import { extend, injectBeforeRender } from 'angular-three';
import { BoxGeometry, Mesh } from 'three';

extend({
    Mesh,
    BoxGeometry
});

@Component({
    template: `
        <ngt-mesh #mesh>
            <ngt-box-geometry />
        </ngt-mesh>
    `,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Experience {
    meshRef = viewChild.required<ElementRef<Mesh>>('mesh');

    constructor() {
        injectBeforeRender(() => {
            const mesh = this.meshRef().nativeElement;

            mesh.rotation.x += 0.01;
            mesh.rotation.y += 0.01;
        });
    }
}
