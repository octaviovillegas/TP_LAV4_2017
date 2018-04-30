import { Component, OnInit } from '@angular/core';
import { PaisesService } from 'app/servicios/paises.service'

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  public status: any = {
    isFirstOpen: true,
    isFirstDisabled: false
  };

  public listadoPaises = new Array<any>();
  public paisSeleccionado = {};
  constructor(private servicioPaises: PaisesService) {  }

  ngOnInit() {
  }

  verPaises(){
    this.servicioPaises.listar().then((response)=>{
      this.listadoPaises = response;
    }).catch((error)=>{
      console.log("error al listar los paises")
    })
  }

  paisSeleccionadoClick(pais){
    this.paisSeleccionado = pais;
  }



}
