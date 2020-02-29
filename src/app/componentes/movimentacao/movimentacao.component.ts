import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movimentacao',
  templateUrl: './movimentacao.component.html',
  styleUrls: ['./movimentacao.component.css']
})
export class MovimentacaoComponent implements OnInit {

  constructor() { }

  @Input() objetosMovimentacao = {};
  ngOnInit() {
  }

}
