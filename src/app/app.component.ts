import { Component } from '@angular/core';

export class Cliente{
  codigo?: number;
  nome?: string;
  cpf?: string;
  telefone?: string;
}

export class Veiculo{
  codigo?: number;
  marca?: string;
  modelo?: string;
  cor?: string;
  valor?: number;
}

export class Venda{
  cliente?: Cliente;
  veiculo?: Veiculo;
  valorVenda?: number;
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'concessionaria';

  cliente: Cliente;
  veiculo: Veiculo;
  venda: Venda;
  controleTela: string = 'cliente'

  clientes: Cliente[] = [];
  veiculos: Veiculo[] = [];
  vendas: Venda[] = [];

  constructor(){
    this.cliente = new Cliente();
    this.veiculo = new Veiculo();
    this.venda = new Venda();
  }



  cadastrarCliente(){
    this.clientes.push(this.cliente);
    this.cliente = new Cliente();
    return false;
  }

  cadastrarVeiculo(){

  }

  venderVeiculo(){

  }


  ativarTela(tela: string){
    switch(tela){
      case 'cliente':
        this.controleTela = 'cliente';
        break;
      case 'veiculo':
        this.controleTela = 'veiculo';
        break;
      case 'venda':
        this.controleTela = 'venda';
        break;       

    }
  }

}

