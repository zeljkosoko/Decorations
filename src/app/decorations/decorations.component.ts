import { Component, OnInit } from '@angular/core';
import { Decoration } from './decoration.model';

@Component({
  selector: 'app-decorations',
  templateUrl: './decorations.component.html',
  styleUrls: ['./decorations.component.css']
})
export class DecorationsComponent implements OnInit {
  decoration: Decoration; // for decoration-details input property binding 

  constructor() { }

  ngOnInit() {
  }

  getSelectedDecoration(oneDecoration: Decoration) {
    this.decoration = oneDecoration;
  }
}
