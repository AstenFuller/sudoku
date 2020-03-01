import React from 'react';
import Square from './square';

export default class Board extends React.Component {
    constructor(){
        super();
    }

    renderSquare() {
        let segment = [];
        let boardsize = 3
        for (let i = 0; i < boardsize; i++) {
            for (let j = 0; j < boardsize; j++){
                segment.push(<Square 
                id={i + ',' + j} />);
            }
        }

        return segment;
    }

    render(){
        return(
           <div>{this.renderSquare()}</div> 
        );
    };
};