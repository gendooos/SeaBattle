import React from 'react';
import GameStart from './GameStart';
import Board from './Board';

export default class Square extends React.Component {
  render() {
    return (
      <div
        className={'square square_' + this.props.letter + this.props.num}
        onMouseOver={
          (e) => {
            if (e.target.parentNode.parentNode.parentNode.parentNode.classList[1] === 'Me') {
              if (e.target.classList[1].length < 10) {
                GameStart(this.props.tableHeader, e.target.classList[1][7], e.target.classList[1][8], this.props.table, true, this.props.rotate)
                console.log()
              } else {
                GameStart(this.props.tableHeader, e.target.classList[1][7], '10', this.props.table, true, this.props.rotate)
              }
            }

          }
        }
        onPointerLeave={(e) => {
          if (e.target.parentNode.parentNode.parentNode.parentNode.classList[1] === 'Me') {
            if (e.target.classList[1].length < 10) {
              GameStart(this.props.tableHeader, e.target.classList[1][7], e.target.classList[1][8], this.props.table, false, this.props.rotate)
            } else {
              GameStart(this.props.tableHeader, e.target.classList[1][7], '10', this.props.table, false, this.props.rotate)
            }
          }
        }}
        onClick={(e) => {
          const choosenShip = +document.querySelector('input[name="ship"]:checked').value[1];
          for (let i = 0; i < choosenShip; i++) {
            if (this.props.rotate) {
              let letter1 = this.props.tableHeader[this.props.tableHeader.indexOf(this.props.letter)+i]
              if(GameStart(this.props.tableHeader, e.target.classList[1][7], e.target.classList[1][8], this.props.table, true, this.props.rotate).length == choosenShip) {
                document.querySelector('.square_'+letter1+this.props.num).classList.add('picked');
                console.log(<Board table={this.props.table}/>)
              }
            }
          }
        }}
      >
        {this.props.value}
      </div>
    )
  }
}



