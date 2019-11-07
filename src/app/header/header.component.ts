import { Component, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})

export class HeaderComponent {

    @Output() navItemClickEvent = new EventEmitter<string>();

    collapsed=true;

    OnNavItemClick(item: string, event: Event) {
        event.preventDefault();
        this.navItemClickEvent.emit(item);
    }

}