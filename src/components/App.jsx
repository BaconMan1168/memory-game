import './App.css'
import {useState} from "react"
import CardGrid from "./CardGrid.jsx"
import Score from "./Score.jsx"

export default function App() {
  const [clickedCards, setClickedCards] = useState([]); //array of gif ids
  const [score, setScore] = useState(0);



  return (
    <div>
      <header>
        <h1>Easy Memory Game</h1>
        <Score scoreNum={score} />
      </header>
        


      <CardGrid clicked={clickedCards} onClick={setClickedCards} currScore={score} onScoreChange={setScore} />
    </div>
    
  )
}


