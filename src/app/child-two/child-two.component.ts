import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css']
})
export class ChildTwoComponent implements OnInit {
@Output() parentstwo = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

}
