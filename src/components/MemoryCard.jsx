import {useState} from "react";

export default function MemoryCard({gifId}){
    const [isClicked, setIsClicked] = useState(false);

    function handleClick(){
        if (!isClicked){
            setIsClicked(true)
        }
    }


    const gif = fetch(`https://api.giphy.com/v1/gifs/${gifId}?api_key=3jCZ9tx5mumrMUeoRZXCygZzChJIb82z`).then(
        res => res.json()
    ).then(data => { return {imgSrc: data.data.images.original.url, imgName: data.data.title}})

    return (
        <div className="card" onClick={handleClick}>
            <img src={gif.imgSrc} alt=""></img>
            <h2>{gif.imgName}</h2>
        </div>
    )
}