import './App.css';
import { Component } from 'react';
import Productos from './components/productos';
import Layout from './components/layout';
import Title from './components/title';
import NavigationBar from './components/navigation_bar';

class App extends Component {
  state = {
    productos: [
      {name: 'Tomate', price: 45,img: '/productos/tomate.jpg'},
      {name: 'Ejote', price: 12,img: '/productos/arbejas.jpg'},
      {name: 'Lechuga', price: 36,img: '/productos/lechuga.jpg'},
    ],
    carro:[],
  }

  agregarAlCarrito  = (producto) => {
    const { carro } = this.state;

    if(carro.find(x => x.name === producto.name)) {
      const newCarro  = carro.map(x => x.name === producto.name ? ({...x, cantidad: x.cantidad + 1}) : x);

      return this.setState({carro: newCarro});
    }

    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad:1,
      }),
    });
  }

  render() {
    return (
      <div>
      <NavigationBar carro={this.state.carro}/>
      <Layout>
      <Title/>
      <Productos agregarAlCarrito={ this.agregarAlCarrito }
        productos={ this.state.productos }
      />
      </Layout>
      </div>
    );
  }
}


export default App;
