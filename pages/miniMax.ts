import checkwinner from "./checkwinner";


function minimax(board: number[], depth: number, player: number, toplayer: boolean): number {
    let move: number = 0;
    let hypoboard = [...board]
    console.log("board", board)
    console.log("player", player)
    console.log("depth", depth)
    if (checkwinner(board, player * -1)) {
      console.log("Win", player * -1)
      return player * -1
    }
    else if (depth < 0 && checkwinner(board, player * -1) == false) { return 0 }
  
    if (player == 1) {
      console.log("player 1")
      let maxGain = -Infinity
      console.log(maxGain)
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
      console.log("maxgain", maxGain)
      console.log("move", move)
      if (toplayer == true) { return move }
      return (maxGain * 10) + depth
  
    }
  
    if (player == -1) {
      console.log("player -1")
      let minGain = Infinity
      console.log(minGain)
      for (let i = 0; i <= 8; i++) {
        if (board[i] == 0) {
          hypoboard[i] = player
          let gain = minimax(hypoboard, depth - 1, 1, false)
          hypoboard[i] = 0
          if (gain <= minGain) { move = i }
          minGain = Math.min(minGain, gain)
        }
      }
      console.log("mingain", minGain)
      if (toplayer == true) { return move }
      return (minGain * 10) - depth
    }
  
    return move;
  }
  

  export default minimax