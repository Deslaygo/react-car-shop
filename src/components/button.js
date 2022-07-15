import { Component } from "react";

const styles = {
  boton:{
    backgroundColor:"#27ae60",
    color:'#FFFFFF',
    borderRadius:'10px',
    border:"none",
    padding: '10px',
    cursor:'pointer',
  }
};

class Button extends Component {

  render() {
    return (
      <button style={styles.boton} {...this.props} />
    );
  }
}

export default Button;