import { Component } from '@angular/core';

@Component({
  selector: 'app-adicao',
  templateUrl: './adicao.component.html',
  styleUrls: ['./adicao.component.css'],
})
export class AdicaoComponent {
  first: number | undefined;
  second: number | undefined;

  total: number | undefined;

  soma(): void {
    if (this.first === undefined || this.second === undefined) {
      return;
    }

    this.total = this.first + this.second;
  }

  limpar(): void {
    this.first = undefined;
    this.second = undefined;
    this.total = undefined;
  }
}
