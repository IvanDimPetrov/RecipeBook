import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive ({
    selector: '[appDropdown]'
})
export class DropdownDirective {

    @HostBinding('class.open')
    private isOpen: boolean = false

    @HostListener('document: click', ['$event']) 
    onClick(event: Event) {  
        this.isOpen = this.element.nativeElement.contains(event.target) ? !this.isOpen : false;
    } 

    constructor(private element: ElementRef) {}
}