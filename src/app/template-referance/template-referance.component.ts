import { Component, OnInit } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
@Component({
  selector: 'app-template-referance',
  templateUrl: './template-referance.component.html',
  styleUrls: ['./template-referance.component.css']
})
export class TemplateReferanceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
getVal(item:any){
console.warn(item)
}
}
