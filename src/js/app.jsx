import React, { Component } from 'react';
import Board from './board';
import Header from './header';
import {
    getVeryEasySudoku,
    getEasySudoku,
    getMediumSudoku,
    getHardSudoku
  } from "fake-sudoku-puzzle-generator";

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            puzzle: []
        };

        this.generatePuzzle = this.generatePuzzle.bind(this);
    }

    generatePuzzle(e) {
        let puzzle = [];
        switch(e) {
            case('getVeryEasySudoku'):
                puzzle = getVeryEasySudoku();
                break;
            case('getEasySudoku'):
                puzzle = getEasySudoku();
                break;
            case('getMediumSudoku'):
                puzzle = getMediumSudoku();
                break;
            case('getHardSudoku'):
                puzzle = getHardSudoku();
                break;
        }

        this.setState({puzzle: puzzle});
    }

    render(){
        return(
            <div className='container'>
                <Header 
                generatePuzzle={this.generatePuzzle}
                />
                <br/>
                <Board 
                puzzle={this.state.puzzle}
                />
            </div>
        );
    }
}

export default App;
