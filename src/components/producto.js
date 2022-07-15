import { Component } from "react";
import Button from "./button";

const styles= {
  producto: {
    border: 'solid 1px #eeeeee',
    width:'30%',
    paddingLeft: '10px',
    paddingRight: '10px',
    paddingTop: '10px',
    paddingBottom: '10px',
    borderRadius: '5px',
    boxShadow: '1px 2px 9px rgb(52, 73, 94,0.3)',
  },
  img:{
    width: '100%',
  }
};

class Producto extends Component{

  render() {
      const {producto, agregarAlCarrito} = this.props;
      return (
        <div style={styles.producto}>
          <img style={styles.img} alt={producto.name} src={producto.img} />
          <hr/>
          <h3>{producto.name}</h3>
          <p>$ {producto.price}</p>
          <Button onClick={ () => agregarAlCarrito(producto) }
          >Agregar al carrito</Button>
        </div>
      );
    }
}

export default Producto;