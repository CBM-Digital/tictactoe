import checkwinner from "./checkwinner";


function minimax(board: number[], depth: number, player: number, toplayer: boolean): number {
    let move: number = 0;
    let hypoboard = [...board]
    if (checkwinner(board, player * -1)) {
      return player * -1
    }
    else if (depth < 0 && checkwinner(board, player * -1) == false) { return 0 }
  
    if (player == 1) {
      let maxGain = -Infinity

      for (let i = 0; i <= 8; i++) {
        if (board[i] == 0) {
          hypoboard[i] = player
          let gain = minimax(hypoboard, depth - 1, -1, false)
          hypoboard[i] = 0
          if (gain >= maxGain) {
            move = i
          }
          maxGain = Math.max(maxGain, gain)
        }
      }

      if (toplayer == true) { return move }
      return (maxGain) + depth
  
    }
  
    if (player == -1) {

      let minGain = Infinity

      for (let i = 0; i <= 8; i++) {
        if (board[i] == 0) {
          hypoboard[i] = player
          let gain = minimax(hypoboard, depth - 1, 1, false)
          hypoboard[i] = 0
          if (gain <= minGain) { move = i }
          minGain = Math.min(minGain, gain)
        }
      }

      if (toplayer == true) { return move }
      return (minGain) - depth
    }
  
    return move;
  }
  

  export default minimax