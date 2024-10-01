function ImageURL(){

    const handleEvents =(e) =>{
        e.target.style.display = 'none';
    }
    const imgSrc = './src/assets/my dp.jpg';
    return <img className="image-sizing"src={imgSrc} onClick={(e)=>{handleEvents(e)}} ></img>
}
export default ImageURL;