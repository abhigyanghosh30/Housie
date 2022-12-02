import { Component } from "react";
import { ButtonGroup, Row } from "react-bootstrap";
import Square from "./Square";

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = { ticket: props.ticket };
        console.log(this.state);
    }
    render() {
        return (this.state.ticket.map((row) => {
            return <Row key={row.index}>
                <ButtonGroup>
                    {row.map((el) => { return <Square number={el} />; })}
                </ButtonGroup>
            </Row>
        }))
    }
}
export default Board;
