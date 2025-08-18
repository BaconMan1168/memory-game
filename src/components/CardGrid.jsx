import {useState} from "react"
import MemoryCard from "./MemoryCard.jsx"

export default function CardGrid(){
    const gifIds = [
        "9hR8Dv4tYNYeWriXXC",
        "GGojpBZaxHNkQTpsGO",
        "l7emOdzh4LcUx133Pl",
        "a5viI92PAF89q",

    ]

    return (
        gifIds.map(id => 
            <MemoryCard key={`id-${id}`} gifId={id} />
        )
    )
}