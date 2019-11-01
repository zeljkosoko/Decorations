import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Decoration } from "../decoration.model";

@Component({
  selector: 'app-decoration-list',
  templateUrl: './decoration-list.component.html',
  styleUrls: ['./decoration-list.component.css']
})
export class DecorationListComponent implements OnInit {

  @Output() forwardSelectedDecoration = new EventEmitter<Decoration>(); //forward to decorations.component

  decorations: Decoration[] = [
    new Decoration('Home','Best place to get peace and relaxation is nature and for this planting a garden or planting trees at home are required.','https://decorationideas.files.wordpress.com/2010/08/terrace-garden.jpg'),
    new Decoration('Wedding','Decorations, Paper Lanterns And Hanging Flowers For Wedding Decor: Hanging Lanterns for Weddings.','https://i.pinimg.com/236x/1c/1c/d4/1c1cd4cee9c1ea4b9a7d72c5d4d13cce--white-lanterns-hanging-lanterns.jpg')
  ]
  constructor() { }

  ngOnInit() {
  }

  onSelectedDecoration(oneSelected: Decoration) {
    this.forwardSelectedDecoration.emit(oneSelected);
  }
}
