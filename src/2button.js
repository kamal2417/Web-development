const Buttons = () => {
    let shiva=()=>{
        console.log("Hi hello every one");

    }
    let krishna=(place)=>{
        console.log("Thank you for the time",place);
    }
    return ( 
        <div className="kmal">
<button onClick={shiva}>Login</button>
        <button onClick={()=> krishna("Kamal")}>Taphere</button>
        </div> 
    );
}
 
export default Buttons;