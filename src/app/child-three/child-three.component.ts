import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-three',
  templateUrl: './child-three.component.html',
  styleUrls: ['./child-three.component.css']
})
export class ChildThreeComponent implements OnInit {
@Output () parentsThree = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

}
