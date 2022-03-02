import React from "react";
import Square from "./Square";

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      table: {
        A: Array(10).fill(null),
        B: Array(10).fill(null),
        C: Array(10).fill(null),
        D: Array(10).fill(null),
        E: Array(10).fill(null),
        F: Array(10).fill(null),
        G: Array(10).fill(null),
        H: Array(10).fill(null),
        I: Array(10).fill(null),
        J: Array(10).fill(null),
      },
      rotate:true
    };
    this.handleClick = this.handleClick.bind(this);
  }
  updateTable = (letter,num,value) =>{
    this.setState(
      prevState => {
        prevState = prevState.table;
        prevState[letter][num-1] = value;
        return {table: prevState}
      })
  }

  renderSquare(value,letter, num,choosenShip, tableHeader,table,rotate) {
    return <Square value={value} letter={letter} num={num} choosenShip={choosenShip} tableHeader={tableHeader} table={table} rotate={rotate} updateTable={this.updateTable}/>;
  }
  handleClick() {
    this.setState(prevState => ({
        rotate: !prevState.rotate
    }));
    console.log(this.state.table)
  }
  
  render() {
    const tableHeader = Object.keys(this.state.table);
    
    return (
      <div className={'board'+ ` ${this.props.className}`}>
        <div style={{ textAlign: 'center' }}>{this.props.user}</div>
        {this.props.user == 'Me' ?
          <div className="ships">
            <div className="x4 ship">
              <input type="radio" id='x4' value='x4' name="ship" defaultChecked />
              <label htmlFor='x4'>
                <div className='ships_border'></div>
                <div className='ships_border'></div>
                <div className='ships_border'></div>
                <div className='ships_border'></div>
              </label>
            </div>
            <div className="x3 ship">
              <input type="radio" id='x3' value='x3' name="ship" />
              <label htmlFor='x3'>
                <div className='ships_border'></div>
                <div className='ships_border'></div>
                <div className='ships_border'></div>
              </label>
            </div>
            <div className="x2 ship">
              <input type="radio" id='x2' value='x2' name="ship" />
              <label htmlFor='x2'>
                <div className='ships_border'></div>
                <div className='ships_border'></div>
              </label>
            </div>
            <div className="x1 ship">
              <input type="radio" id='x1' value='x1' name="ship" />
              <label htmlFor='x1'>
                <div className='ships_border'></div>
              </label>
            </div>
            <div className="rotate_btn" onClick={this.handleClick}>Rotate ship</div>
          </div> : null}

        <div className="board-head">
          <div style={{ width: '42px', height: '42px' }}></div>
          {tableHeader.map((e) => <div className="num">{e}</div>)}
        </div>
        <div>
          {tableHeader.map((elem, index) => <div className="wrapper"><div className="num">{index + 1}</div>{tableHeader.map(e =>
            <div className="wrapper">{this.renderSquare(this.state.table[e][index], e, index + 1, this.state.choosenShip,tableHeader,this.state.table, this.state.rotate)}</div>
          )}</div>)}
        </div>
      </div>
    );
  }
}


