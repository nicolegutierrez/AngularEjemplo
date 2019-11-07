import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  fechaDato: string;



  constructor(private httpClient:HttpClient) { }

  getFecha(fechaDato: string){ 
    return this.httpClient.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${fechaDato}`)
  }

}
