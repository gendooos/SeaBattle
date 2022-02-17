import React from 'react';
import GameStart from './GameStart';

export default class Square extends React.Component{
    render(){
        return(
            <div 
                className={'square square_' + this.props.letter+this.props.num}
                onMouseOver={
                    (e)=>{
                        if (e.target.parentNode.parentNode.parentNode.parentNode.classList[1]==='Me'){
                            if(e.target.classList[1].length < 10){
                                GameStart(this.props.tableHeader,e.target.classList[1][7],e.target.classList[1][8],this.props.table,true)
                            } else {
                                GameStart(this.props.tableHeader,e.target.classList[1][7],'10',this.props.table,true)
                            }
                        }

                    }
                }
                onPointerLeave = {(e)=> {
                    if (e.target.parentNode.parentNode.parentNode.parentNode.classList[1]==='Me'){
                            if(e.target.classList[1].length < 10){
                                GameStart(this.props.tableHeader,e.target.classList[1][7],e.target.classList[1][8],this.props.table,false)
                            } else {
                                GameStart(this.props.tableHeader,e.target.classList[1][7],'10',this.props.table,false)
                            }
                        }
                }} 
            >
                {this.props.value}
            </div>
        )
    }
}



// onPointerOver= {(e)=> x.map((elem,i)=>console.log(1))} 
//                 onPointerLeave = {(e)=>e.target.style.border = '1px solid black'}
{/*this.props.tableHeader.indexOf(this.props.letter)*/}