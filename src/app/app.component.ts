import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    visibleComponent: string = 'recipe';

    switchComponents(navItem) {

      this.visibleComponent = navItem;
      
    }

}
