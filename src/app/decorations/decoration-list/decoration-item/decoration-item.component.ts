import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Decoration } from '../../decoration.model';

@Component({
  selector: 'app-decoration-item',
  templateUrl: './decoration-item.component.html',
  styleUrls: ['./decoration-item.component.css']
})
export class DecorationItemComponent implements OnInit {
  @Input() inputDecoration: Decoration;

  @Output() selectedDecoration = new EventEmitter<any>(); //forward to decoration-list.component

  constructor() { }

  ngOnInit() {
  }

  onSelectDecoration() {
    this.selectedDecoration.emit();
  }
}
