import React from 'react';

export default (props) => (
<div className='square' id={props.id} onClick={props.puzzle.length > 1 && props.puzzle[props.i][props.j] ? null : props.enterNumber}>
    {props.puzzle.length > 1 && props.puzzle[props.i][props.j]
    ? props.puzzle[props.i][props.j] 
    : props.testPuzzle.length > 1 && props.testPuzzle[props.i][props.j]
    ? props.testPuzzle[props.i][props.j] 
    : ''}
</div>
);