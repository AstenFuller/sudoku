import React from 'react';
import Square from './square';

export default class Board extends React.Component {
    constructor() {
        super();
    }

    renderSquare() {
        let segment = [];
        let ABC = 'ABCDEFGHI';
        let boardsize = 10
        let count = 1;

        for (let i = 1; i < boardsize; i++) {
            for (let j = 1; j < boardsize; j++) {
                segment.push(<Square
                    i={i - 1}
                    j={j - 1}
                    id={ABC.charAt(i - 1) + j}
                    key={count} 
                    puzzle={this.props.puzzle}
                    />);
                count++;
            }   
        }
        return segment;
    }

    render() {
        return (
            <div className='board'>
                {this.renderSquare()}
            </div>
        );
    };
};