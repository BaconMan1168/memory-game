import MemoryCard from "./MemoryCard.jsx"

export default function CardGrid({clicked, onClick, currScore, onScoreChange}){
    const gifIds = [
        "9hR8Dv4tYNYeWriXXC",
        "GGojpBZaxHNkQTpsGO",
        "l7emOdzh4LcUx133Pl",
        "a5viI92PAF89q",

    ]

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

    return (
        gifIds.map(id => {
            if (clicked.includes(id)){
                <MemoryCard key={`id-${id}`} gifId={id} isClicked={true} onClick={handleClick} />
            }
            else{
                <MemoryCard key={`id-${id}`} gifId={id} isClicked={false} onClick={handleClick} />
            }
            
        })
            
        
    )
}