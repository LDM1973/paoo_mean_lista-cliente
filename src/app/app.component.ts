import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  clientes = [];
  onClienteAdicionado(cliente): void {
    // ... = operador spread(espalhamento)
    this.clientes = [...this.clientes, cliente];
  }
}
