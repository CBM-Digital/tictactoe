import exp from 'constants'
import Head from 'next/head'
import Image from 'next/image'
import { ReactNode } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TicTacToe</title>
        <meta name="TicTacToeGame" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>TicTacToe</h1>
    <div className={styles.boardbox}>{new Array(9).fill(null).map(() => <Grid></Grid>)}</div>
    

      </div>

      )
    }

function Grid(props:{children?:ReactNode}){
 
  return <div className={styles.board}>{props.children}</div>

}