import React from 'react'
import TweetCard from './components/TweetCard'
import styles from './styles/Card.module.css'

function App() {

  return (
    <>
      <div className={styles.background} >
        <TweetCard />
      </div>
    </>
  )
}

export default App
