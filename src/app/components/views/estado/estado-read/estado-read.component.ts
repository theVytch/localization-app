import { EstadoService } from './../estado.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estado } from '../estado.model';

@Component({
  selector: 'app-estado-read',
  templateUrl: './estado-read.component.html',
  styleUrls: ['./estado-read.component.css']
})
export class EstadoReadComponent implements OnInit {

  estados: Estado[] = []

  displayedColumns: string[] = ['cod_Estado','sgl_Estado','nome_Estado','cidades']

  constructor(private service: EstadoService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.service.findAll().subscribe(resposta => {
      console.log(resposta);
      this.estados = resposta;
    })
  }

}
