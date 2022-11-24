import Head from 'next/head'
import { ReactNode, useState, useEffect, useCallback, useMemo } from 'react'
import styles from '../styles/Home.module.css'
import checkwinner from './checkwinner';
import minimax from './miniMax';

export default function Home() {
  const [board, setBoard] = useState(new Array(9).fill(0));
  const [player,setplayer] = useState(1)

  const Xwin = useMemo(() => checkwinner(board, 1), [board]);
  const Owin = useMemo(() => checkwinner(board, -1), [board]);
  const draw = useMemo(() => (board.includes(0)==false&&Owin==false&&Xwin==false), [board,Owin,Xwin]);

  const move = useCallback((index: number) => {
    if(Xwin||Owin){return}
    const newboard = [...board]
      if(newboard[index] != 0){return}
      newboard[index] = player

    console.log("move", index)
    setBoard(newboard)

    const nextplayer = player * -1
    setplayer(nextplayer)
  }, [board, player, Xwin, Owin]);

  const empty = useMemo(() => board.some((value: number) => value !== 0), [board]);

  const play = useCallback((index: number) => {
    if (player == -1) {
      move(index);
    }
  }, [player, move]);


  useEffect(() => {
    let timeout: any;
    if (player === 1) {
      timeout = setTimeout(() => {
        move(minimax(board, 9, 1, true));
      }, 150);
    }

    return () => {
      timeout && clearTimeout(timeout);
    }
  }, [player, move, board]);

  return (
    <div className={styles.container}>
      <Head>
        <title>TicTacToe</title>
        <meta name="TicTacToeGame" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.header}>TicTacToe</h1>
    <div className={styles.boardbox}>{board.map((item,index) => (
    <Grid key={index} onClick={() => play(index)} >
      {item === 1 ? "X":null}
      {item === -1 ? "O":null}
    </Grid>))
    }</div>


    {empty&&<p className={styles.p}>Wait a sec, it's thinking!</p>}

    {Xwin&&<h2>Fuck Yeah X!</h2>}
    {Owin&&<h2>Fuck Yeah O!</h2>}
    {draw&&<h2>Draw!</h2>}
    {Xwin&&<button onClick={()=>setBoard(new Array(9).fill(0))}>Play Again?</button>}
    {Owin&&<button onClick={()=>setBoard(new Array(9).fill(0))}>Play Again?</button>}
    {draw&&<button onClick={()=>setBoard(new Array(9).fill(0))}>Play Again?</button>}
      </div>

      )

    }

 
function Grid(props: { children?: ReactNode, onClick?: () => void }) {
  return <div className={styles.board} onClick={props.onClick}>{props.children}</div>
}



//self defined max & min
function max(a: number, b: number) {
  if (a > b) { return a }
  else { return b }
}

function min(a: number, b: number) {
  if (a < b) { return a }
  else { return b }
}
