import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css']
})
export class ChildTwoComponent implements OnInit {
@Output() parenteventTwo = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }

}
