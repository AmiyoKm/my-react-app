function Button(){
    let count =0;
    const handleClick = (name) =>{ count+=1;
        console.log(` ${name} Clicked me ${count} times`);
                                    };
    return <button onClick={()=>handleClick("Amiyo")}>CLICK ME 🤐 </button>
}
export default Button;