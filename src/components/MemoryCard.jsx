export default function MemoryCard({gifId, isClicked, onClick}){
    function handleClick(){
        if (!isClicked){
            onClick(gifId, false);
        }
        else {
            onClick(gifId, true)
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