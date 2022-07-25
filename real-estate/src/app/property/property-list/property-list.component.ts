import { HousingService } from './../../services/housing.service';
// import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IProperty } from '../IProperty.interface';
@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  // property: any;
  // modify http data to array type
  // property: Array<IProperty>;
 property: Array<IProperty>;
  // call api directly from ts
  // constructor( private http: HttpClient ) { }

  // ngOnInit(): void {
  //   this.http.get('data/properties.json').subscribe(
  //     data => {
  //       console.log(data);
  //       this.property = data;
  //     }
  //   );
  // }

  // write Api in service and call the service from any ts
  constructor( private housingService: HousingService ) { }

  ngOnInit(): void {
    this.housingService.getAllProperties().subscribe(
      data => {
        console.log(data);
        this.property = data;
      }, error => {
        console.log(error);
      }
    );
  }

}
