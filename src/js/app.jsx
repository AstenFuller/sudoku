import React, { Component } from 'react';
import Board from './board';

class App extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='container'>
                <Board />
            </div>
        );
    }
}

export default App;
