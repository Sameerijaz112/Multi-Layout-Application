import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.css']
})
export class ParentsComponent implements OnInit {
 
 data = 10;

  constructor() { }

  ngOnInit(): void {
  }

}
