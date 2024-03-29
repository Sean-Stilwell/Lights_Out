import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Linking } from 'react-native';

// Font Awesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons/faCircleQuestion';
import { faUndo } from '@fortawesome/free-solid-svg-icons/faUndo';
import { faShareFromSquare } from '@fortawesome/free-solid-svg-icons/faShareFromSquare'
// import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'

// Local Imports
import Cell from './Cell';
import ShareLoadModal from './ShareLoadModal';
import WinnerModal from './WinnerModal';
import HelpModal from './HelpModal';
import { encodeBoard, decodeBoard, codeIsValid } from '../scripts/board_coding';
import { BOARD_HEIGHT, BOARD_WIDTH, CELL_INACTIVE, CELL_OFF, CELL_ON } from './Constants';

export default class Game extends Component {

    state = { 
        startingBoard: [CELL_OFF, CELL_OFF, CELL_OFF, CELL_OFF, 
                CELL_OFF, CELL_OFF, CELL_OFF, CELL_OFF,
                CELL_OFF, CELL_OFF, CELL_OFF, CELL_OFF,
                CELL_OFF, CELL_OFF, CELL_OFF, CELL_OFF,
                CELL_OFF, CELL_OFF, CELL_OFF, CELL_OFF],
        board: [CELL_OFF, CELL_OFF, CELL_OFF, CELL_OFF, 
                CELL_OFF, CELL_OFF, CELL_OFF, CELL_OFF,
                CELL_OFF, CELL_OFF, CELL_OFF, CELL_OFF,
                CELL_OFF, CELL_OFF, CELL_OFF, CELL_OFF,
                CELL_OFF, CELL_OFF, CELL_OFF, CELL_OFF],
        encoded: "0000000000",
        youWon: false,
        moves: 0,
        help: false,
        share: false,
    };


    /**
     * Used to initialize the state of the game.
     * @param {*} props 
     */
    constructor(props){
        super(props);
        this._clickTile = this._clickTile.bind(this);
        this._loadGame = this._loadGame.bind(this);
    }


    /**
     * Randomize the board immediately when the page loads.
     */
    componentDidMount(){
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

        // If the cell is inactive, do nothing
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
            }
        }

        this.setState({
            board: board,
            moves: this.state.moves + 1,
            youWon: this._hasWon(),
            help: false,
            share: false
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

        // Update the starting and encoded boards to match the new game.
        let startingBoard = [...board];
        let encodedBoard = encodeBoard(startingBoard);

        // Update the state of the game
        this.setState({
            board: board,
            startingBoard: startingBoard,
            encoded: encodedBoard,
            moves: 0,
            youWon: this._hasWon(),
            help: false,
            share: false
        }, () => {});
    }


    /**
     * Restores the game to the starting state. Allows the user to start over.
     */
    _restart(){
        this.setState({
            board: [...this.state.startingBoard],
            moves: 0,
            youWon: false,
            help: false
        });
    }

    _loadGame(encoded){
        if (codeIsValid(encoded)) {
            let board = decodeBoard(encoded);
            this.setState({
                board: [...board],
                startingBoard: [...board],
                encoded: encoded,
                moves: 0,
                youWon: false,
                help: false,
                share: false,
            });
        }
        else {
            alert("Invalid code");
        }
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
                <WinnerModal visible={this.state.youWon} onPressNewGame={() => this._randomize()} onPressRetry={() => this._restart()} moves={this.state.moves} encoded={this.state.encoded}/>
                <HelpModal visible={this.state.help} onPress={() => this.setState({help: false})}/>
                <ShareLoadModal visible={this.state.share} onPress={() => this.setState({share: false})} encoded={this.state.encoded} loader={this._loadGame}/>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={styles.button_icon} onPress={() => this.setState({help: true})}>
                        <FontAwesomeIcon icon={faCircleQuestion} size={20} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button_icon} onPress={() => this._restart()}>
                        <FontAwesomeIcon icon={faUndo} size={20} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => this._randomize()}>
                        <Text style={styles.button_text}>New Game</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button_icon} onPress={() => this.setState({share: true})}>
                        <FontAwesomeIcon icon={faShareFromSquare} size={20} />
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={styles.button_icon} onPress={() => Linking.openURL('https://github.com/Sean-Stilwell/Lights_Out/')}>
                        <FontAwesomeIcon icon={faGithub} size={20} />
                    </TouchableOpacity> */}
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
    button_icon: {
        margin: 10,
        height: 40,
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        width: 40,
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