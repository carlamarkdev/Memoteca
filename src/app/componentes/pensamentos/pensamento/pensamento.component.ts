import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css'],
})
export class PensamentoComponent implements OnInit {
  constructor() {}

  @Input() pensamento = {
    conteudo: 'I love Angular',
    autoria: 'Nay',
    modelo: 'modelo3',
  };

  ngOnInit(): void {}
}
