import './App.css'
import {useState} from "react"
import CardGrid from "./CardGrid.jsx"

export default function App() {
  const [clickedCards, setClickedCards] = useState([]); //array of gif ids

  return (
    <div>
      <h1>Easy Memory Game</h1>
      <CardGrid clicked={clickedCards} onClick={setClickedCards} />
    </div>
    
  )
}


