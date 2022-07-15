import { Component } from "react";
import Carro from "./carro";
import Logo from "./logo";

const styles= {
  navbar:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '100px',
    justifyContent: 'space-between',
    position: 'relative',
    padding: '0 50px',
    boxShadow: '1px 2px 9px rgb(52, 73, 94,0.3)',
  }
}

class NavigationBar extends Component{

  render() {
    return (
      <nav style={styles.navbar}>
        <Logo/>
        <Carro carro={this.props.carro}/>
      </nav>
    )
  };
}

export default NavigationBar;