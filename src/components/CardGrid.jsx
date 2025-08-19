import MemoryCard from "./MemoryCard.jsx"

export default function CardGrid({clicked, onClick, currScore, onScoreChange}){
    const gifIds = [
        "9hR8Dv4tYNYeWriXXC",
        "GGojpBZaxHNkQTpsGO",
        "l7emOdzh4LcUx133Pl",
        "a5viI92PAF89q",

    ]

    function createScrambledArr(){
        const randomArr = [];
        while (randomArr.length < 4){
            let randomNum = Math.floor(Math.random() * 4);
            if (!randomArr.includes(randomNum)){
                randomArr.push(randomNum);
            }
        }
        return randomArr;
    }

    function handleClick(clickedId, alreadyClicked){
        if (clicked.length === 4){
            const empty = [];
            onClick(empty);
            onScoreChange(currScore + 1);
        }
        else if (alreadyClicked){
            const empty = [];
            onClick(empty);
            onScoreChange(0);
        }
        else {
            const copy = clicked.slice();
            copy.push(clickedId);
            onClick(copy);
            onScoreChange(currScore + 1);
        }    
    }

    const scrambledArr = createScrambledArr();
    const cardArr = [];

    while (scrambledArr.length > 0){
        let index = scrambledArr.shift();
        if (clicked.includes(gifIds[index])){
            cardArr.push(<MemoryCard key={`id-${gifIds[index]}`} gifId={gifIds[index]} isClicked={true} onClick={handleClick} />) 
        }
        else{
            cardArr.push(<MemoryCard key={`id-${gifIds[index]}`} gifId={gifIds[index]} isClicked={false} onClick={handleClick} />)
        }
    }

    return (
        <div className="grid">
            {cardArr};
        </div>
        
            
        
    )
}