import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, input, signal, viewChild } from '@angular/core';
import { extend, injectBeforeRender, NgtVector3, NgtArgs, injectStore } from 'angular-three';
import { BoxGeometry, Mesh, MeshBasicMaterial, MeshStandardMaterial, SpotLight, PointLight, AmbientLight } from 'three';

import { OrbitControls } from 'three-stdlib';

extend({
    Mesh,
    BoxGeometry,
    MeshBasicMaterial: MeshBasicMaterial,
    MeshStandardMaterial: MeshStandardMaterial,
    SpotLight,
    PointLight,
    AmbientLight,
    OrbitControls
});

@Component({
    selector: 'app-scene-graph',
    imports: [NgtArgs],
    template: `
        <ngt-mesh #mesh [scale]="clicked() ? 1.5 : 1" (pointerover)="hovered.set(true)" (pointerout)="hovered.set(false)" (click)="clicked.set(!clicked())" [position]="position()">
            <ngt-ambient-light [intensity]="0.5" />
            <ngt-spot-light [position]="10" [intensity]="0.5 * Math.PI" [angle]="0.15" [penumbra]="1" [decay]="0" />
            <ngt-point-light [position]="-10" [intensity]="0.5 * Math.PI" [decay]="0" />

            <ngt-orbit-controls *args="[camera(), glDomElement()]" />
            <ngt-grid-helper />

            <ngt-box-geometry />

            <!-- <ngt-mesh-basic-material [color]="hovered() ? 'red' : 'purple'" /> -->
            <ngt-mesh-standard-material [color]="hovered() ? 'darkred' : 'mediumpurple'" />
        </ngt-mesh>
    `,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SceneGraphComponent {
    meshRef = viewChild.required<ElementRef<Mesh>>('mesh');
    position = input<NgtVector3>([0, 0, 0]);

    protected readonly Math = Math;

    hovered = signal(false);
    clicked = signal(false);

    private store = injectStore();
    protected camera = this.store.select('camera');
    protected glDomElement = this.store.select('gl', 'domElement');

    constructor() {
        injectBeforeRender(() => {
            const mesh = this.meshRef().nativeElement;

            mesh.rotation.x += 0.01;
            mesh.rotation.y += 0.01;
        });
    }
}
