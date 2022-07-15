import { Component } from "react";

const styles = {
  detallesCarro:{
    backgroundColor: '#fff',
    position: 'absolute',
    marginTop: '30px',
    boxShadow: '1px 5px 5px rgb(0, 0, 0,0.3)',
    borderRadius: '5px',
    width: '300px',
    right: 50,
    padding: '8px',
  },
  img:{
    width: '40px',
    height: '40px',
  },
  ul:{
    listStyleType: "none",
    margin: '0',
    padding: '0',
  },
  item:{
    display: 'flex',
    flex: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px 10px',
    borderBottom: '1px solid #bdc3c7',
  },
  cantidad:{
    backgroundColor: '#27ae60',
    color: '#fff',
    borderRadius: '10px',
    padding: '5px',
    fontSize: '12px',
    width: '10px',
    textAlign: 'center',
  }
};

class DetallesCarro extends Component {

  render() {
    const { carro } = this.props;
    console.log(carro);
    return (
      <div style={styles.detallesCarro}>
      <ul style={styles.ul}>
        { carro.map((producto) => <li style={styles.item} key={producto.name}>
          <img style={styles.img} src={producto.img} alt={producto.name} />
          {producto.name} 
          <span style={styles.cantidad}>{producto.cantidad}</span>
        </li>
        )}
      </ul>
      </div>
    )
  };
}

export default DetallesCarro;