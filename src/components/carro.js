import { Component } from "react";
import BubbleAlert from "./bubble_alert";
import DetallesCarro from "./detalles_carro";

const styles = {
  carro:{
    backgroundColor: '#359a2c',
    color: '#FFFFFF',
    border:'none',
    padding: '15px',
    borderRadius: '15px',
    cursor: 'pointer',
  },
  bubble:{
    position: 'relative',
    left: '12px',
    top: '20px',
  }
};



class Carro extends Component {
  state = {
    mostrarCarro: false,
  };

  habilitarCarro = () => {
    if(this.props.carro.length === 0) return this.setState({mostrarCarro: false});

    this.setState({ mostrarCarro: !this.state.mostrarCarro});
  }

  render() {
    const { carro } = this.props;
    const cantidad = carro.reduce((acc, val) => acc + val.cantidad,0);
    return (
      <div>
      <span style={styles.bubble}>
        <BubbleAlert value={cantidad}/>
      </span>
        <button style={styles.carro} onClick={this.habilitarCarro} >
          Carro
        </button>
        {this.state.mostrarCarro ?  <DetallesCarro carro={carro}/> : null}
      </div>
    )
  };
}


export default Carro;