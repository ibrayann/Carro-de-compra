import { Component } from "react";

const styles = {
    bubbleAlert: {
        background: "#E9725A",
        borderRadius: "15px",
        color: "#fff",
        padding: "2px  10px",
        fontSize: "0.9rem",
        width: "20px"
    }
}

class BubbleAlert extends Component{
    getNumber(numero) {
        if (!numero) return ""
        return numero>9 ? "9+" : numero
    }
    render() {
        const {value } = this.props
        return (
            <span style={styles.bubbleAlert}>{this.getNumber(value)}</span>
        )
    }
}

export default BubbleAlert