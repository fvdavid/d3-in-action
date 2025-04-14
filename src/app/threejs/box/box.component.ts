import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgtCanvas } from 'angular-three';
import { Experience } from '../experience/experience.component';

@Component({
  selector: 'app-box',
  imports: [NgtCanvas],
  templateUrl: './box.component.html',
  styleUrl: './box.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoxComponent {
    protected sceneGraph = Experience;
}
