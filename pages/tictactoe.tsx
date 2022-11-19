import exp from 'constants'
import { SourceMap } from 'module'
import { checkCustomRoutes } from 'next/dist/lib/load-custom-routes'
import Head from 'next/head'
import Image from 'next/image'
import { ReactNode, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [board, setBoard] = useState(new Array(9).fill(0));
  const [player,setplayer] = useState(-1)

  console.log(board)
  const Xwin = checkwinner(board,1)
  const Owin = checkwinner(board,-1)  

  function move(index:number){
    if(Xwin||Owin){return}
    const newboard = [...board]
      if(newboard[index] != 0){return}
      newboard[index] = player

    console.log(index)
    setBoard(newboard)

    const nextplayer = player * -1
    setplayer(nextplayer)
    

  }

  return (
    <div className={styles.container}>
      <Head>
        <title>TicTacToe</title>
        <meta name="TicTacToeGame" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>TicTacToe</h1>
    <div className={styles.boardbox}>{board.map((item,index) => (
    <Grid key={index} onClick={() => move(index)} >
      {item === 1 ? "X":null}
      {item === -1 ? "O":null}
    </Grid>))
    }</div>
    
    {Xwin&&<h2>Fuck Yeah X!</h2>}
    {Owin&&<h2>Fuck Yeah O!</h2>}
    {Owin&&<button onClick={()=>setBoard(new Array(9).fill(0))}>Play Again?</button>}
    {Xwin&&<button onClick={()=>setBoard(new Array(9).fill(0))}>Play Again?</button>}
      </div>

      )

    }

 
function Grid(props:{children?:ReactNode,onClick?:()=>void}){
 
  return <div className={styles.board} onClick={props.onClick}>{props.children}</div>


}

function checkwinner(board:number[],player:number):boolean{
    const row1 = [0,1,2];
    const row2 = [3,4,5];
    const row3 = [6,7,8];

    const col1 = [0,3,6];
    const col2 = [1,4,7];
    const col3 = [2,5,8];

    const diag1 = [0,4,8];
    const diag2 = [2,4,6];

    const combos = [row1,row2,row3,col1,col2,col3,diag1,diag2];

    const iswin = (combo:number[]):boolean => {
      return board[combo[0]]+board[combo[1]]+board[combo[2]] === 3*player
    }
  

    const winner = combos.some(iswin)
    console.log(winner)
    return winner

    
}