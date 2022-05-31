import { CELL_INACTIVE, CELL_ON, CELL_OFF, BOARD_HEIGHT, BOARD_WIDTH } from "../components/Constants";

/**
 * Converts a board array to an encoded string that can be used to save the board state.
 * These strings can be more easily shared with other users to share games.
 */
export function encodeBoard(board){
    let encoded = "";
    let i = 0;
    while (i < board.length - 1){
        encoded += encode(board[i], board[i + 1]);
        i += 2;
    }
    return encoded;
}


/**
 * Helper function to encode the board. Takes two cells and encodes them into a single number.
 * This reduces the size of the encoded string by a factor of 2.
 * @param {int} pos1 The first cell
 * @param {int} pos2 The second cell
 * @returns The encoded value
 */
function encode(pos1, pos2){
    switch (pos1){
        case CELL_OFF:
            switch (pos2){
                case CELL_OFF:
                    return 0;
                case CELL_ON:
                    return 1;
                case CELL_INACTIVE:
                    return 2;
            }
        case CELL_ON:
            switch (pos2){
                case CELL_OFF:
                    return 3;
                case CELL_ON:
                    return 4;
                case CELL_INACTIVE:
                    return 5;
            }
        case CELL_INACTIVE:
            switch (pos2){
                case CELL_OFF:
                    return 6;
                case CELL_ON:
                    return 7;
                case CELL_INACTIVE:
                    return 8;
            }
    }
}


/**
 * Converts an encoded string back into the board array by reversing the encoding process.
 * @param {*} encoded The encoded string
 * @returns The board array
 */
export function decodeBoard(encoded){
    let decoded = [];
    for (let i = 0; i < encoded.length; i += 1){
        let arr = decode(parseInt(encoded[i]));
        decoded.push(arr[0]);
        decoded.push(arr[1]);
    }
    return decoded;
}


/**
 * Helper function to decode the board. Takes a single number and decodes it into two cells.
 * @param {int} val The encoded value
 * @returns An array containing the two cells
 */
function decode(val){
    switch (val){
        case 0:
            return [CELL_OFF, CELL_OFF];
        case 1:
            return [CELL_OFF, CELL_ON];
        case 2:
            return [CELL_OFF, CELL_INACTIVE];
        case 3:
            return [CELL_ON, CELL_OFF];
        case 4:
            return [CELL_ON, CELL_ON];
        case 5:
            return [CELL_ON, CELL_INACTIVE];
        case 6:
            return [CELL_INACTIVE, CELL_OFF];
        case 7:
            return [CELL_INACTIVE, CELL_ON];
        case 8:
            return [CELL_INACTIVE, CELL_INACTIVE];
    }
}


/**
 * Determines if a given code is a valid code.
 * @param {int} encoded The code to check
 * @returns Whether the code is valid
 */
 export function codeIsValid(encoded){
    if (encoded.length != (BOARD_HEIGHT * BOARD_WIDTH) / 2){
        return false;
    }

    for (let i = 0; i < encoded.length; i += 1){
        let value = parseInt(encoded[i]);
        if (isNaN(value)){
            return false;
        }
        if (value > 8 || value < 0){
            return false;
        }
    }

    return true;
}