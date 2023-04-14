import { Component } from '@angular/core';
import { Usuario } from '../clases/usuario';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent {

  usuario:Usuario;
  
  constructor()
  {
    this.usuario = new Usuario();

  }

  Registrar(){

    localStorage.setItem("usuario",JSON.stringify(this.usuario));
    console.log(this.usuario);
  }
  

}
