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
    this.nome_cid = this.upFirstLetter(this.nome_cid)
    console.log(this.nome_cid)
    this.findByName()
  }

  findByName(): void{
    this.service.findByName(this.nome_cid).subscribe((resposta) =>{
      if (resposta > []){
        this.cidades = resposta
      }else{
        this.service.mensagem('Cidade não encontrada! pode estar faltando algum acento')
      }
    })}

  upFirstLetter(x:String){
    return x.charAt(0).toUpperCase() + x.slice(1);
  }

  voltar(): void {
      console.log(this.router.navigate([`estados/${this.id_est}/cidades`]))
  }
}