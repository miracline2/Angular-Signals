import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FeatureComponent } from './component/feature/feature.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
  FeatureComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AngularSignals';
}
