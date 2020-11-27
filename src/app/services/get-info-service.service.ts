import { Injectable } from '@angular/core';
import { ModelsInterface } from "../interfaces/getModels/models-interface";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class GetInfoServiceService {

  constructor(private _http : HttpClient ) { }

  getAllModels(){
    const route = 'https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json';
    return this._http.get(route);
  }
  
}
