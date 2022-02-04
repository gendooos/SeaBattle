import React from "react";
import Square from "./Square";

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      table: {
        A: Array(10).fill("x"),
        B: Array(10).fill("x"),
        C: Array(10).fill("x"),
        D: Array(10).fill("x"),
        E: Array(10).fill("x"),
        F: Array(10).fill("x"),
        G: Array(10).fill("x"),
        H: Array(10).fill("x"),
        I: Array(10).fill("x"),
        J: Array(10).fill("x"),
      },
    };
  }

  renderSquare(letter, num) {
    return <Square letter={letter} num={num} />;
  }

  render() {
    const tableHeader = Object.keys(this.state.table),
					tableBody = Object.values(this.state.table);

    return (
      <div>
      <div style={{textAlign:'center'}}>{this.props.user}</div>
        <div className="board-head">
					<div style={{width:'42px',height:'42px'}}></div>
          {tableHeader.map((e) => this.renderSquare(e))}
        </div>
				<div className="wrapper">
				{tableBody.map((e) => (
          <div className="board-fild">
            <div className="board-head">{this.renderSquare(tableBody.indexOf(e)+1)}</div>
            {e.map((value) => (
              this.renderSquare(value)
            ))}
          </div>
        ))}
				</div>
      </div>
    );
  }
}
