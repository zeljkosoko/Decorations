import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'
})
export class HeaderComponent {

    @Output() nameEmitter = new EventEmitter<string>();

    onSelect(compName: string) {
        this.nameEmitter.emit(compName);//to app-component for navigation
    }
}