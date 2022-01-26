import { CidadeService } from './../cidade.service';
import { Cidade } from './../cidade.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cidade-read-search',
  templateUrl: './cidade-read-search.component.html',
  styleUrls: ['./cidade-read-search.component.css']
})
export class CidadeReadSearchComponent implements OnInit {

  displayedColumns: string[] = ['nome_estado', 'nome'];

  id_est: String = '' 

  nome_cid: String = ''

  cidades: Cidade[] = []

  cidade: Cidade = {
    nome_estado: '',
    nome: ''
  }

  constructor(private service: CidadeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id_est = this.route.snapshot.paramMap.get('id_est')!
    this.nome_cid = this.route.snapshot.paramMap.get('nome_cid')!
    this.findByName()
  }

  findByName(): void{
    this.service.findByName(this.nome_cid).subscribe((resposta) =>{
      this.cidades = resposta
    })}

  voltar(): void {
      console.log(this.router.navigate([`estados/${this.id_est}/cidades`]))
  }
}