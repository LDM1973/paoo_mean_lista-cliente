import { Component, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'app-cliente-inserir',
    templateUrl: './cliente-inserir.component.html',
    styleUrls: ['./cliente-inserir.component.css']
})
export class ClienteInserirComponent{

    @Output()
    clienteAdicionado = new EventEmitter();

    nome: string;
    fone: string;
    email: string;

    onAdicionarCliente(){
        //1. Criar um objeto cliente
        const cliente = {
            nome: this.nome,
            fone: this.fone,
            email: this.email
        }
        //2. Enviar o objeto cliente para o componente pai
        this.clienteAdicionado.emit(cliente);
    }

}
