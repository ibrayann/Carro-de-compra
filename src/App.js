import { Component } from "react";
import Productos from "./components/Productos.js";
import Layout from "./components/Layout.js";
import Tittle from "./components/Tittle.js";
import Navbar from "./components/Navbar.js";

class App extends Component {
  state = {
    productos: [
      { name: "Tomate", price: 1500, img: "/productos/tomate.jpg" },
      { name: "Lechuga", price: 500, img: "/productos/lechuga.jpg" },
      { name: "Arbejas", price: 100, img: "/productos/arbejas.jpg" },
    ],
    carro: [],
    esCarroVisible: false
  };

  mostrarCarro = () => {
    if (!this.state.carro.length) {
      return
    }
    this.setState({ esCarroVisible: !this.state.esCarroVisible})
  }

  AgregarCarro = (producto) => {
    const { carro } = this.state;
    if (carro.find((x) => x.name === producto.name)) {
      const newCarro = carro.map((x) =>
        x.name === producto.name
          ? {
              ...x,
              cantidad: x.cantidad + 1,
            }
          : x
      );
      return this.setState({ carro: newCarro});
    }

    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1,
      }),
    });
  };
  render() {
    const { esCarroVisible } = this.state
    return (
      <>
        <Navbar carro={this.state.carro} esCarroVisible={esCarroVisible} mostrarCarro={this.mostrarCarro} />
        <Layout>
          <Tittle />
          <Productos
            productos={this.state.productos}
            AgregarCarro={this.AgregarCarro}
          />
        </Layout>
      </>
    );
  }
}

export default App;
