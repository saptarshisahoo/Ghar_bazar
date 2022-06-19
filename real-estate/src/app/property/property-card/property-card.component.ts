import { Component } from '@angular/core';


@Component({
  selector: 'app-property-card',
  // template: `<h3>I am a card</h3>`,
  templateUrl : 'property-card.component.html',
  // styles: ['h3{font-weight: normal;}']
  styleUrls : ['property-card.component.css']

})
export class PropertyCardComponent{
  property: any = {
    id: 1,
    Type: 'House',
    Name: 'Birla House',
    Price: 1200000
  };
}
