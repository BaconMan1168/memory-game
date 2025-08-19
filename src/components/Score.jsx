import {useState} from "react"

export default function Score({scoreNum}){
    const [bestScore, setBestScore] = useState(0);

    if (scoreNum > bestScore){
        setBestScore(scoreNum);
    }
    


    return (
        <div>
            <div>{`Score: ${scoreNum}`}</div>
            <div>{`Best Score: ${bestScore}`}</div>
        </div>
        
    )
}