import { Component, OnInit } from '@angular/core';
import { Element } from "../shared/element.model";
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  elements: Element[] = [
    new Element('Wood chairs',3),
    new Element('Planting trees', 8)
  ];
  
  constructor() { }

  ngOnInit() {
  }

  onAddedElement(oneElement: Element) {
    this.elements.push(oneElement); 
  }
}
