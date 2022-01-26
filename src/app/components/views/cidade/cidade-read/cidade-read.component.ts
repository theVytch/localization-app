import { CidadeService } from './../cidade.service';
import { Component, OnInit } from '@angular/core';
import { Cidade } from '../cidade.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cidade-read',
  templateUrl: './cidade-read.component.html',
  styleUrls: ['./cidade-read.component.css']
})
export class CidadeReadComponent implements OnInit {

  displayedColumns: string[] = ['nome_estado', 'nome', 'detalhes'];

  id_est: String = '' 

  nome_cid: String = ''

  cidades: Cidade[] = []

  cidade: Cidade = {
    nome_estado: '',
    nome: ''
  }

  constructor(private service: CidadeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.cidade.nome = this.route.snapshot.paramMap.get('nome')!
    this.id_est = this.route.snapshot.paramMap.get('id_est')!
    this.findAll()
  }


  findAll(): void{
    this.service.findAll(this.id_est).subscribe((resposta) => {
      this.cidades = resposta;
    })
  }

  procurar(): void{
      this.router.navigate([`estados/${this.id_est}/cidades/${this.cidade.nome}`])
    }

  voltar(): void {
      this.router.navigate([`estados/${this.id_est}/cidades`])
  }
}
