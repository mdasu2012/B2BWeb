import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConstants } from '../constants/appConstants';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private _http: HttpClient) { }

  
  createProperty(property: any){
    return this._http.post<any>(AppConstants.POST_CREAE_PROPERTY(), property);
  }

  getAllProperties(){
    return this._http.get<any>(AppConstants.GET_ALL_PROPERTIES());
  }
}
