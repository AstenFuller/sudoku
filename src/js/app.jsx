import React, { Component } from 'react';
import Board from './board';
import Header from './header';
import NumberButton from './number';
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
            puzzle: [],
            numberToEnter: null,
            testPuzzle: []
        };

        this.generatePuzzle = this.generatePuzzle.bind(this);
        this.enterNumber = this.enterNumber.bind(this);
        this.getNumber = this.getNumber.bind(this);
    }

    getNumber(e) {
        this.setState({numberToEnter: e});
    }

    enterNumber(e) {
        let updatedPuzzle = [...this.state.testPuzzle];

        if(this.state.numberToEnter == null) {
            return;
        } else {
            updatedPuzzle[e.charAt(0)][e.charAt(1)] = this.state.numberToEnter;
            this.setState({testPuzzle: updatedPuzzle});
        }
    }

    generatePuzzle(e) {
        let puzzle = [];
        let testPuzzle = [];
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
        testPuzzle = puzzle.map(function(arr) {
            return arr.slice();
        });

        this.setState({puzzle: puzzle,
                       testPuzzle: testPuzzle});
    }

    render(){
        return(
            <div className='container'>
                <Header 
                generatePuzzle={this.generatePuzzle}
                />
                <br/>
                <Board 
                testPuzzle={this.state.testPuzzle}
                puzzle={this.state.puzzle}
                enterNumber={this.enterNumber}
                />
                <br/>
                <NumberButton 
                getNumber={this.getNumber}/>
            </div>
        );
    }
}

export default App;
