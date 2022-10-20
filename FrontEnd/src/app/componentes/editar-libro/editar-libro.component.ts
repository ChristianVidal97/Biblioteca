import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/interfaces/comentarios';

@Component({
  selector: 'app-editar-libro',
  templateUrl: './editar-libro.component.html',
  styleUrls: ['./editar-libro.component.css']
})
export class EditarLibroComponent implements OnInit {

  listaLibros: Libro []= [
    {
    nombre:'DEL AMOR Y OTROS DEMONIOS',
    isbn:'226663325632236',
    editorial:'',
    autor:'GABRIEL GARCIA MARQUEZ'
  
  },

  {
    nombre:'THE BLACK CAT',
    isbn:'6622336666',
    editorial:'',
    autor:'EDGAR ALLAN POE'
  
  },

  {
    nombre:'CIEN AÑOS DE SOLEDAD',
    isbn:'23213215525561',
    editorial:'',
    autor:'GABRIEL GARCIA MARQUEZ'
  
  }
]

  constructor() { }

  ngOnInit(): void {
  }


}
