import React from 'react';
import GameStart from './GameStart';

export default class Square extends React.Component{
    render(){
        return(
            <div 
                className={'square square_' + this.props.letter+this.props.num}
                onMouseOver={(e)=>GameStart(this.props.tableHeader,this.props.choosenShip,e.target.classList[1][7],e.target.classList[1][8],this.props.table,true)}
                onPointerLeave = {(e)=> GameStart(this.props.tableHeader,this.props.choosenShip,e.target.classList[1][7],e.target.classList[1][8],this.props.table,false)} 
            >
                {this.props.value}
            </div>
        )
    }
}



// onPointerOver= {(e)=> x.map((elem,i)=>console.log(1))} 
//                 onPointerLeave = {(e)=>e.target.style.border = '1px solid black'}
{/*this.props.tableHeader.indexOf(this.props.letter)*/}