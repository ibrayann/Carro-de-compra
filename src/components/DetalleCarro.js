import { Component } from "react";

const styles = {
    detallesCarro: {
        backgroundColor: "#fff",
        position: "absolute",
        marginTop: 30,
        boxShadow: "1px 5px 5px rgb(0,0,0,0.3)",
        width: "300px",
        right: 50
    },
    producto: {
        listStyleType: "none ",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "25px 20px",
        borderBottom: "1px solid #aaa"
    },
    ul: {
        margin: 0,
        padding: 0
    }
}

class DetalleCarro extends Component {
    render() {
        const { carro } = this.props
        console.log(carro)
        return (
            <div style={styles.detallesCarro}>
                <ul style={styles.ul}>
                    {carro.map(item => <li style={styles.producto} key={item.name}>
                        <img src={item.img} alt={item.name} width="50px" height="32px" />
                        {item.name}
                        <span>{item.cantidad}</span></li>)}
                </ul>
            </div>
        )

    }
}

export default DetalleCarro;