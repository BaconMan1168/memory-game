import {useState} from "react"

export default function Score({scoreNum}){
    const [bestScore, setBestScore] = useState(0);

    if (scoreNum > bestScore){
        setBestScore(scoreNum);
    }
    


    return (
        <div>
            <h2>{`Score: ${scoreNum}`}</h2>
            <h2>{`Best Score: ${bestScore}`}</h2>
        </div>
        
    )
}