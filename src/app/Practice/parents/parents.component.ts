import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.css']
})
export class ParentsComponent implements OnInit {
 
 

  constructor() { }

  ngOnInit(): void {
  }
  parents(item: string): void {
    console.warn(item);
  }
parentstwo(data:string): void {
  console.warn(data)}
}
