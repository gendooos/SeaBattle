import React from 'react';
import GameStart from './GameStart';

export default class Square extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            rotate:true
        };
        
    }

    
    render(){
        return(
            <div 
                className={'square square_' + this.props.letter+this.props.num}
                onMouseOver={
                    (e)=>{
                        if (e.target.parentNode.parentNode.parentNode.parentNode.classList[1]==='Me'){
                            if(e.target.classList[1].length < 10){
                                GameStart(this.props.tableHeader,e.target.classList[1][7],e.target.classList[1][8],this.props.table,true,this.props.rotate)
                            } else {
                                GameStart(this.props.tableHeader,e.target.classList[1][7],'10',this.props.table,true,this.props.rotate)
                            }
                        }

                    }
                }
                onPointerLeave = {(e)=> {
                    if (e.target.parentNode.parentNode.parentNode.parentNode.classList[1]==='Me'){
                            if(e.target.classList[1].length < 10){
                                GameStart(this.props.tableHeader,e.target.classList[1][7],e.target.classList[1][8],this.props.table,false,this.props.rotate)
                            } else {
                                GameStart(this.props.tableHeader,e.target.classList[1][7],'10',this.props.table,false,this.props.rotate)
                            }
                        }
                }} 
            >
                {this.props.value}
            </div>
        )
    }
}



