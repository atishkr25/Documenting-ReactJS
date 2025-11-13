import { useState } from "react"


function MyComponent(){
    let [name, setName] = useState();
    const[age, setAge] = useState(0)
    const handleClick = () => {
        setName("MAXIMAS");
    }
    const increametAge = () => {
        setAge(age + 1);
    }
    
    return(
    <>
        <p>name : {name}</p>
        <button onClick={handleClick}> set name </button>

        <p>Age : {age}</p>
        <button onClick={increametAge}> increamet Age </button>
    </>
    )
}
export default MyComponent;