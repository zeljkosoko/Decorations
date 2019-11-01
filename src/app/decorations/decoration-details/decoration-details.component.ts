import { Component, OnInit, Input } from '@angular/core';
import { Decoration } from '../decoration.model';

@Component({
  selector: 'app-decoration-details',
  templateUrl: './decoration-details.component.html',
  styleUrls: ['./decoration-details.component.css']
})
export class DecorationDetailsComponent implements OnInit {
  @Input() inputDecoration: Decoration;
  
  constructor() { }

  ngOnInit() {
  }

}
