import { Component } from "react";
import Producto from "./Producto";

const styles = {
  productos: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
};


class Productos extends Component {
  render() {
    const { productos, AgregarCarro } = this.props;
    return (
      <div style={styles.productos}>
        {productos.map((producto) => (
          <Producto
            producto={producto}
            key={producto.name}
            AgregarCarro={AgregarCarro}
          />
        ))}
      </div>
    );
  }
}

export default Productos;
