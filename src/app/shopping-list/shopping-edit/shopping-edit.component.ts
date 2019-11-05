import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Element } from "../../shared/element.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  //local references with @ViewChild
  @ViewChild('inputName') inputNameReference: ElementRef;
  @ViewChild('inputAmount') inputAmountReference: ElementRef;

  @Output() elementAdded: EventEmitter<Element> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onAddElement() {
    let elementName = this.inputNameReference.nativeElement.value;
    let elementAmount = this.inputAmountReference.nativeElement.value;
    let el = new Element(elementName,elementAmount);

    this.elementAdded.emit(el);
  }
}
