import { Component } from '@angular/core';
import { Usuario } from '../clases/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usuario:Usuario = {user:"", pass:""};
  user!: string;
  pass!: string;
  algo!:string;


  constructor()
  {
    this.algo="";

  }

  Login()
  {
    
      this.usuario=JSON.parse(localStorage.getItem('usuario') || '{}');
      console.log(this.usuario.user,this.usuario.pass);

    if(this.user == this.usuario.user && this.pass==this.usuario.pass)
    {
      alert("Entraste!");

    }
    else{
      alert("no entraste");
    }
    
  }



}
