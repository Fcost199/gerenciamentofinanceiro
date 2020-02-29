import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-geral',
  templateUrl: './geral.component.html',
  styleUrls: ['./geral.component.css']
})
export class GeralComponent implements OnInit {

  constructor() { }
  objetosMovimentacao = [
    {
      tipo: 'Entrada',
      descricao: 'dfovjldfojv djfn ujnosdd dfsf dscsdc',
      data: '2020-02-29',
      valor: 150.59
    },
    {
      tipo: 'Entrada',
      descricao: 'dfovjldf effe sdvvseevvs dv dqefee',
      data: '2020-02-29',
      valor: 110.89
    },
    {
      tipo: 'Entrada',
      descricao: 'dfovjldfsffs sffefe fsdvvq qdv ',
      data: '2020-02-29',
      valor: 36.73
    }
  ];

  ngOnInit() {
  }

}
