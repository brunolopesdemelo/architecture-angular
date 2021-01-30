import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastros',
  templateUrl: './cadastros.component.html',
  styleUrls: ['./cadastros.component.css'],
})
export class CadastrosComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('CadastrosComponent');
  }
}
