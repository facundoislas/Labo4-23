import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  /* variable = "";
  num1: number=0;
  num2: number=0;
  resul: number=0;


  cambiarTitulo()
  {
    this.title="Aguante San Lorenzo";
  }

  sumar()
  {
    this.resul=Number (this.num1)+ Number(this.num2);
  }*/

  edad1="";
  edad2="";
  suma=0;
  promedio =0;
  flag = false;

  calcular(){
    this.suma= Number(this.edad1)+Number(this.edad2);
    this.promedio = Number(this.suma)/2;
    this.flag =true;
  }

  limpiar()
  {
    this.edad1="";
    this.edad2="";
    this.suma=0;
    this.promedio=0;
    this.flag= false;
  }

}
