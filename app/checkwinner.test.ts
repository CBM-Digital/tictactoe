import checkwinner from "./checkwinner";

describe("checkwinner test",() => {
    test("toprow all x, x wins",() => {
        const board = [1,1,1,0,0,0,0,0,0]
        const player = 1
        const expectedResult = true
        let actualResult = checkwinner(board,player)
        expect(actualResult).toEqual(expectedResult)
    })

    test("toprow all o, o wins",() => {
        const board = [-1,-1,-1,0,0,0,0,0,0]
        const player = -1
        const expectedResult = true
        let actualResult = checkwinner(board,player)
        expect(actualResult).toEqual(expectedResult)
    })
})

/*const add = (a, b) => a + b;

const cases = [[2, 2, 4], [-2, -2, -4], [2, -2, 0]];

describe("'add' utility", () => {
  test.each(cases)(
    "given %p and %p as arguments, returns %p",
    (firstArg, secondArg, expectedResult) => {
      const result = add(firstArg, secondArg);
      expect(result).toEqual(expectedResult);
    }
  );
});*/

const Xcases:[number[],boolean][] = [
    [[1,1,1,0,0,0,0,0,0], true],
    [[0,0,0,1,1,1,0,0,0], true],
    [[0,0,0,0,0,0,1,1,1], true],
    [[1,0,0,1,0,0,1,0,0], true],
    [[0,1,0,0,1,0,0,1,0], true],
    [[0,0,1,0,0,1,0,0,1], true],
    [[1,0,0,0,1,0,0,0,1], true],
    [[0,0,1,0,1,0,1,0,0], true],

    [[1,1,2,0,0,0,0,0,0], false],
    [[0,0,0,-1,1,1,0,0,0], false],
    [[0,0,0,0,0,0,-1,1,1], false],
    [[1,0,0,1,0,0,12,0,0], false],
    [[0,1,0,0,1,0,0,-1,0], false],
    [[0,0,1,0,0,-1,0,0,1], false],
    [[1,0,0,0,-1,0,0,0,1], false],
    [[0,0,1,0,-1,0,1,0,0], false],    

    ];

describe("Test X winning", () => {
  test.each(Xcases)(
    "given %p and %p as arguments, returns %p",
    (board, expectedResult) => {
        const player = 1
      const result = checkwinner(board,player);
      expect(result).toEqual(expectedResult);
    }
  );
});

const Ocases:[number[],boolean][] = [
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
});