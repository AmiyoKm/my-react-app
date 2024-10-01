function Button(){
    const handleClick = () =>{console.log("OUCH");};
    return <button onClick={handleClick()}>CLICK ME 🤐 </button>
}
export default Button;