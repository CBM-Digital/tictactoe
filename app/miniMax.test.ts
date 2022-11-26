import minimax from "./miniMax";

/*const Ocases:[number[],boolean][] = [
    [[-1,-1,-1,0,0,0,0,0,0], true],
    [[0,0,0,-1,-1,-1,0,0,0], true],
    [[0,0,0,0,0,0,-1,-1,-1], true],
    [[-1,0,0,-1,0,0,-1,0,0], true],
    [[0,-1,0,0,-1,0,0,-1,0], true],
    [[0,0,-1,0,0,-1,0,0,-1], true],
    [[-1,0,0,0,-1,0,0,0,-1], true],
    [[0,0,-1,0,-1,0,-1,0,0], true]

    ];

describe("Test O winning", () => {
  test.each(Ocases)(
    "given %p and %p as arguments, returns %p",
    (board, expectedResult) => {
        const player = -1
      const result = checkwinner(board,player);
      expect(result).toEqual(expectedResult);
    }
  );
});*/

const finalcases:[number[],number,number,boolean,number][] = [
  //easy win  
    [[-1,1,1,-1,1,-1,0,-1,0],9,1,true,6],
    [[-1,1,1,-1,1,-1,0,-1,0],9,-1,true,6],
  //top right win for either
    [[-1,0,0,0,1,0,1,0,-1],9,1,true,2],
    [[-1,0,0,0,1,0,1,0,-1],9,-1,true,2],
  //final move ready
    [[-1,0,-1,0,-1,1,1,0,1],9,1,true,7],
    [[-1,0,0,0,1,-1,1,-1,1],9,1,true,2],
    [[0,0,-1,0,1,-1,1,-1,1],9,1,true,2],
    [[0,0,-1,0,1,-1,1,-1,1],1,1,false,2],
    ];

describe("choosing the final move", () => {
  test.each(finalcases)(
    "given %p, %p, %p and %p as arguments, returns %p",
    (board,depth,player,toplayer,expectedResult) => {
      const result = minimax(board,depth,player,toplayer);
      expect(result).toEqual(expectedResult);
    }
  );
});