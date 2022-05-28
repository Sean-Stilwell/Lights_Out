import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, Image, Button, TouchableOpacity } from 'react-native';
import Cell from './Cell';
import WinnerModal from './WinnerModal';
import { BOARD_HEIGHT, BOARD_WIDTH, CELL_OFF, CELL_ON } from './Constants';

export default class Game extends Component {

    state = { 
        board: [CELL_OFF, CELL_OFF, CELL_OFF, CELL_OFF, 
                CELL_OFF, CELL_OFF, CELL_OFF, CELL_OFF,
                CELL_OFF, CELL_OFF, CELL_OFF, CELL_OFF,
                CELL_OFF, CELL_OFF, CELL_OFF, CELL_OFF,
                CELL_OFF, CELL_OFF, CELL_OFF, CELL_OFF],
        youWon: false,
        moves: 0,
    };

    constructor(props){
        super(props);

        this._clickTile = this._clickTile.bind(this);
        this._randomize();
    }

    /**
     * [0,  1,  2,  3]
     * [4,  5,  6,  7]
     * [8,  9,  10, 11]
     * [12, 13, 14, 15]
     * [16, 17, 18, 19]
     * @param {int} index The index of the cell that was clicked
     */
    _clickTile(index){
        const board = this.state.board;

        // Toggle the value of the cell
        board[index] = board[index] === CELL_OFF ? CELL_ON : CELL_OFF;

        // Toggle the cell above the clicked cell
        if (index >= 4) {
            board[index - 4] = board[index - 4] === CELL_OFF ? CELL_ON : CELL_OFF;
        }

        // Toggle the cell below the clicked cell
        if (index <= 15) {
            board[index + 4] = board[index + 4] === CELL_OFF ? CELL_ON : CELL_OFF;
        }

        // Toggle the cell to the left of the clicked cell
        if (index % 4 !== 0) {
            board[index - 1] = board[index - 1] === CELL_OFF ? CELL_ON : CELL_OFF;
        }

        // Toggle the cell to the right of the clicked cell
        if (index % 4 !== 3) {
            board[index + 1] = board[index + 1] === CELL_OFF ? CELL_ON : CELL_OFF;
        }

        this.setState({
            board: board,
            moves: this.state.moves + 1,
            youWon: this._hasWon()
        });
    }

    _randomize(){
        let board = this.state.board;
        for (let i = 0; i < board.length; i++) {
            if (Math.random() > 0.4) {
                this._clickTile(i);
            }
        }

        this.setState({
            board: board,
            youWon: this._hasWon(),
            moves: 0
        });
    }

    _hasWon(){
        for (let i = 0; i < this.state.board.length; i++) {
            if (this.state.board[i] === CELL_ON) {
                return false;
            }
        }
        console.log("You won!");
        return true;
    }
    
    _renderRows() {
        const rows = [];

        for (let i = 0; i < BOARD_HEIGHT; ++i) {
        rows.push(
            <View key={i} style={styles.row}>
                {this._renderRow(i)}
            </View>,
        );
        }

        return rows;
    }

    _renderRow(rowIndex) {
        const cells = [];
        for (let i = 0; i < BOARD_WIDTH; ++i) {
            cells.push(
                <Cell key={rowIndex * 4 + i} index={rowIndex * 4 + i} value={this.state.board[rowIndex*4+i]} onPress={this._clickTile}/>,
            );
        }
        return cells;
    }

    render() {
        return (
            <View style={styles.container}>
                {this._renderRows()}
                <WinnerModal visible={this.state.youWon} onPress={() => this._randomize()}/>
                <TouchableOpacity style={styles.button} onPress={() => this._randomize()}>
                    <Text style={styles.button_text}>New Game</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    row: {
      flexDirection: 'row',
      width: '100%',
    },
    button: {
        marginTop: 10,
        height: 40,
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        width: 140,
        backgroundColor: '#ffA812',
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    button_text: {
        fontSize: 15,
        fontWeight: 'bold',
    }
  });