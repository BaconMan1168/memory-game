import { useState } from "react"

export default function MemoryCard({gifId}){
    const gif = fetch(`https://api.giphy.com/v1/gifs/${gifId}?api_key=3jCZ9tx5mumrMUeoRZXCygZzChJIb82z`).then(
        res => res.json()
    ).then(data => data.data.images.original.url)

    return (
        <div className="card">
            <img src={gif} alt=""></img>
            <h2>{"Invincible"}</h2>
        </div>
    )
}