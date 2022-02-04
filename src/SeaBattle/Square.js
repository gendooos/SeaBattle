import React from 'react';


export default class Square extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            letter:null,
            num:null,
        };
    }
    render(){
        return(
            <div className="square">
                {this.props.letter}{this.props.num}
            </div>
        )
    }
}