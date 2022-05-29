import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, Image, Button, TouchableOpacity } from 'react-native';
import Cell from './Cell';
import WinnerModal from './WinnerModal';
import HelpModal from './HelpModal';
import { BOARD_HEIGHT, BOARD_WIDTH, CELL_INACTIVE, CELL_OFF, CELL_ON } from './Constants';

export default class Game extends Component {

    state = { 
        board: [CELL_OFF, CELL_OFF, CELL_OFF, CELL_OFF, 
                CELL_OFF, CELL_OFF, CELL_OFF, CELL_OFF,
                CELL_OFF, CELL_OFF, CELL_OFF, CELL_OFF,
                CELL_OFF, CELL_OFF, CELL_OFF, CELL_OFF,
                CELL_OFF, CELL_OFF, CELL_OFF, CELL_OFF],
        youWon: false,
        moves: 0,
        help: false,
    };

    /**
     * Used to initialize the state of the game.
     * @param {*} props 
     */
    constructor(props){
        super(props);

        this._clickTile = this._clickTile.bind(this);
        this._randomize();
    }

    /**
     * Code that runs when a tile is pressed. This function is passed to the
     * Cell component as a prop. It is called by the Cell component when the
     * user taps a cell, passing the index of the cell that was tapped. We use
     * this index to update the state of the game.
     * @param {int} index The index of the cell that was clicked
     */
    _clickTile(index){
        const board = this.state.board;

        if (board[index] === CELL_INACTIVE) {
            return
        }

        // Toggle the value of the cell
        board[index] = board[index] === CELL_OFF ? CELL_ON : CELL_OFF;

        // Toggle the cell above the clicked cell
        if (index >= BOARD_WIDTH) {
            switch (board[index - BOARD_WIDTH]) {
                case CELL_OFF:
                    board[index - BOARD_WIDTH] = CELL_ON;
                    break;
                case CELL_ON:
                    board[index - BOARD_WIDTH] = CELL_OFF;
                    break;
                case CELL_INACTIVE:
                    break;
            }
        }

        // Toggle the cell below the clicked cell
        if (index <= BOARD_HEIGHT * BOARD_WIDTH - BOARD_WIDTH - 1) {
            switch (board[index + BOARD_WIDTH]) {
                case CELL_OFF:
                    board[index + BOARD_WIDTH] = CELL_ON;
                    break;
                case CELL_ON:
                    board[index + BOARD_WIDTH] = CELL_OFF;
                    break;
                case CELL_INACTIVE:
                    break;
            }
        }

        // Toggle the cell to the left of the clicked cell
        if (index % 4 !== 0) {
            switch (board[index - 1]) {
                case CELL_OFF:
                    board[index - 1] = CELL_ON;
                    break;
                case CELL_ON:
                    board[index - 1] = CELL_OFF;
                    break;
                case CELL_INACTIVE:
                    break;
            }
        }

        // Toggle the cell to the right of the clicked cell
        if (index % 4 !== 3) {
            switch (board[index + 1]) {
                case CELL_OFF:
                    board[index + 1] = CELL_ON;
                    break;
                case CELL_ON:
                    board[index + 1] = CELL_OFF;
                    break;
                case CELL_INACTIVE:
                    break;
            }
        }

        this.setState({
            board: board,
            moves: this.state.moves + 1,
            youWon: this._hasWon(),
            help: false
        });
    }

    /**
     * Randomizes the state of the game. Begins by setting some cells to inactive.
     * If not inactive, a cell starts off.
     * 
     * After the active cells are set, the game is randomized by randomly clicking
     * cells. This ensures there is always a winning path, as those cells can simply
     * be unclicked to make the game win.
     */
    _randomize(){
        let board = this.state.board;

        // Set some cells to inactive
        for (let i = 0; i < board.length; i++) {
            let odds = 0.6;
            if (i % 4 === 0 || i % 4 === 3 || i < BOARD_WIDTH || i > BOARD_HEIGHT * BOARD_WIDTH - BOARD_WIDTH - 1) {
                odds += 0.6;
            }
            board[i] = Math.random() > 0.90 ? CELL_INACTIVE : CELL_OFF;
        }

        // Randomly click cells to randomize the game
        for (let i = 0; i < board.length; i++) {
            if (Math.random() > 0.4) {
                this._clickTile(i);
            }
        }

        // Update the state of the game
        this.setState({
            board: board,
            youWon: this._hasWon(),
            moves: 0,
            help: false
        });
    }

    /**
     * Returns true if the game has been won.
     * @returns {boolean} True if the game has been won, false otherwise.
     */
    _hasWon(){
        for (let i = 0; i < this.state.board.length; i++) {
            if (this.state.board[i] === CELL_ON) {
                return false;
            }
        }
        console.log("You won!");
        return true;
    }
    
    /**
     * Used to render the rows of the game board.
     * @returns {array} An array of rows. Each row is an array of cells.
     */
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

    /**
     * Used to render an individual row of the game board.
     * @param {int} rowIndex The index of the row to render.
     * @returns The row of cells at the given index.
     */
    _renderRow(rowIndex) {
        const cells = [];
        for (let i = 0; i < BOARD_WIDTH; ++i) {
            cells.push(
                <Cell key={rowIndex * 4 + i} index={rowIndex * 4 + i} value={this.state.board[rowIndex*4+i]} onPress={this._clickTile}/>,
            );
        }
        return cells;
    }

    /**
     * Used to render the game.
     * @returns {<View>} The game board, winning screen, and the button to start a new game.
     */
    render() {
        return (
            <View style={styles.container}>
                {this._renderRows()}
                <WinnerModal visible={this.state.youWon} onPress={() => this._randomize()}/>
                <HelpModal visible={this.state.help} onPress={() => this.setState({help: false})}/>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={styles.button} onPress={() => this._randomize()}>
                        <Text style={styles.button_text}>New Game</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => this.setState({help: true})}>
                        <Text style={styles.button_text}>Help</Text>
                    </TouchableOpacity>
                </View>
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
        margin: 10,
        height: 40,
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        width: 120,
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