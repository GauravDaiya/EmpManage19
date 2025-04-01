import { Component, NgZone } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [RouterOutlet],
  
})
export class AppComponent {
  title = 'Angular19';
  
  constructor(private ngZone: NgZone) {
    this.ngZone.onMicrotaskEmpty.subscribe(() => {
      console.log('Change detection ran (potential re-renders)');
    });
  }
}
