
import MemoryCard from "./MemoryCard.jsx"

export default function CardGrid({clicked, onClick}){
    const gifIds = [
        "9hR8Dv4tYNYeWriXXC",
        "GGojpBZaxHNkQTpsGO",
        "l7emOdzh4LcUx133Pl",
        "a5viI92PAF89q",

    ]

    function handleClick(clickedId){
        const copy = clicked.slice();
        copy.push(clickedId);
        onClick(copy);
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