 function checkwinner(board: number[], player: number): boolean {
    const row1 = [0, 1, 2];
    const row2 = [3, 4, 5];
    const row3 = [6, 7, 8];
  
    const col1 = [0, 3, 6];
    const col2 = [1, 4, 7];
    const col3 = [2, 5, 8];
  
    const diag1 = [0, 4, 8];
    const diag2 = [2, 4, 6];
  
    const combos = [row1, row2, row3, col1, col2, col3, diag1, diag2];
  
    const iswin = (combo: number[]): boolean => {
      return board[combo[0]] + board[combo[1]] + board[combo[2]] === 3 * player
    }
  
    const winner = combos.some(iswin)
    return winner
  }

  export default checkwinner