import { Component, Input, OnInit } from '@angular/core';
import { Part } from '../model/part';

@Component({
  selector: 'part',
  templateUrl: './part.component.html',
  styleUrls: ['./part.component.css']
})
export class partComponent  {

  @Input()
  part: Part;
  
  constructor() { }
  
  

}
