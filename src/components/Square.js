import { Component } from "react";
import { Button } from "react-bootstrap";

class Square extends Component {
    constructor(props) {
        super(props);
        this.state = { clicked: false }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event) {
        event.preventDefault();
        if (this.state.clicked) {
            this.setState({ clicked: false });
        }
        else {
            this.setState({ clicked: true });
        }
        console.log("clicked", this.state.clicked);
    }
    render() {
        return (
            <Button height="5vh" width="5vh" variant={this.state.clicked === true ? "success" : "outline-primary"} onClick={this.handleClick} disabled={this.props.number === "00"} className={this.props.number === "00" ? "text-white" : "text-dark"}>
                {this.props.number}
            </Button>
        );
    }
}

export default Square;