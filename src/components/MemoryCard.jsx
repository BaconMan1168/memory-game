import {useState, useEffect} from "react"


export default function MemoryCard({gifId, isClicked, onClick}){
    const [gif, setGif] = useState({ url: "", title: "" });

    function handleClick(){
        onClick(gifId, isClicked);
    }

    useEffect(() => {
        fetch(`https://api.giphy.com/v1/gifs/${gifId}?api_key=3jCZ9tx5mumrMUeoRZXCygZzChJIb82z`)
        .then(res => res.json())
        .then(data => {
            setGif({
            url: data.data.images.original.url,
            title: data.data.title
            });
        });
    }, [gifId]);

    return (
        <div className="card" onClick={handleClick}>
            <img src={gif.url} alt=""></img>
            <h2>{gif.title}</h2>
        </div>
    )
}