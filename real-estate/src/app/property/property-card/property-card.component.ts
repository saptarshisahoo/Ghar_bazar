import { IProperty } from './../IProperty.interface';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-property-card',
  // template: `<h3>I am a card</h3>`,
  templateUrl : 'property-card.component.html',
  // styles: ['h3{font-weight: normal;}']
  styleUrls : ['property-card.component.css']

})
export class PropertyCardComponent implements OnInit{
  @Input() prop: IProperty;
  ngOnInit(): void {
  }
}
