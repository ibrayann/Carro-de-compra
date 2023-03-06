import { Component } from "react";
import BubbleAlert from "./BubbleAlert";
import DetalleCarro from "./DetalleCarro";
const styles = {
  carro: {
    backgroundColor: "#359A2C",
    border: "none",
    color: "#fff",
    padding: "15px",
    borderRadius: "15px",
    cursor: "pointer",
  },
  bubbleAlert: {
    position: "relative",
    left: "20px",
    top: "17px",
  },
};

class Carro extends Component {
  render() {
    const { carro, esCarroVisible, mostrarCarro } = this.props;
    console.log(esCarroVisible);
    console.log(mostrarCarro)
    const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0);
    return (
      <div>
        <span style={styles.bubbleAlert}>
          {cantidad != 0 && <BubbleAlert value={cantidad} />}
        </span>
        <button onClick={()=>mostrarCarro()} style={styles.carro}>Carro</button>
        {esCarroVisible && <DetalleCarro carro={carro} />}
      </div>
    );
  }
}
export default Carro;
