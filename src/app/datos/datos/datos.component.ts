import { Component, OnInit } from '@angular/core';

import { NasaService } from '../../service/nasa.service';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {
  
  fechaDato: string;
  datos: any[] = [];

  constructor(private servicioNasa : NasaService) { }

  ngOnInit() {
    this.servicioNasa.getFecha(this.fechaDato)
    .subscribe(
      (data:any[]) => {
        this.datos=data;
      },
      error => {
        console.log(error);
      }
    )
  }

}
