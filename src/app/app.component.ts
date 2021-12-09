import { Component } from '@angular/core';

export class Cliente{
  codigo?: string;
  nome?: string;
  cpf?: string;
  telefone?: string;
}

export class Veiculo{
  codigo?: string;
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
    this.cliente.codigo = Math.random().toString();
    this.clientes.push(this.cliente);
    this.cliente = new Cliente();
    return false;
  }

  cadastrarVeiculo(){
    this.veiculo.codigo = Math.random().toString();
    this.veiculos.push(this.veiculo);
    this.veiculo = new Veiculo();
    return false;
  }

  venderVeiculo(){
    const cliente = this.clientes.find(c => c.codigo == this.venda.cliente);
    const veiculo = this.veiculos.find(v => v.codigo == this.venda.veiculo);
     this.venda.cliente = cliente;
    this.venda.veiculo = veiculo;
    this.venda.valorVenda = veiculo?.valor;
    this.vendas.push(this.venda);
    this.venda = new Venda();
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

