import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { IProperty } from '../property/IProperty.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http: HttpClient) { }

  getAllProperties(): Observable<IProperty[]>{
     // return this.http.get('data/properties.json');
    // modify http data to array type
    // return this.http.get('data/properties.json').pipe(
    //   map(data => {
    //     console.log(data);
    //     const propertiesArray: Array<IProperty> = [];
    //     for (const id in data){
    //       if (data.hasOwnProperty(id)){
    //         propertiesArray.push(data[id]);
    //       }
    //     }
    //     console.log(propertiesArray);
    //     return propertiesArray;
    //   })
    // );
    // or
     return this.http.get<IProperty[]>('data/properties.json');
  }
}
