import React from 'react';

export default (props) => (
<div className='square' id={props.id}>{props.puzzle.length > 1 && props.puzzle[props.i][props.j] ? props.puzzle[props.i][props.j] : ''}</div>
);