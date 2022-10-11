import { useState,useEffect } from "react"

function Usestate() {

    const [name,setName]=useState("Muhammad Zubair");
    const [count,setCount]=useState(0);
    const [email,setEmail]=useState("");
    const [count2,setCount2]=useState(0);
    
    //useEffect for count
    useEffect(() => {
      console.log(`you clicked the button ${count} times`)

    },[count]);
    
   
    //useEffect for count2
    useEffect(() => {
        console.log(`you click on count2 ${count2} times`)
    }, [count2]);
    
    

    
    function chName()
    {
        let val=name;
        if (val==='Zubair') {
            setName("Muhammad Zubair")            
        }
        else
        {
            setName("Zubair")
        }
    }


    function inputHandler()
    {
        console.log(email)
    }

    function incriment()
    {
        setCount(count+1)
    }


  return (
<>
<h1>My name is {name}</h1>
<button onClick={chName}>just last name</button>
<br /><br />

<form>
    <input type="text"
    value={email}
    onChange={(e) =>setEmail(e.target.value)}
    placeholder="Enter ur email"
    />
    <p>The email u enter is {email}</p>
    {/* {console.log("the email u enter is"+email)} */}


</form>
    <button onClick={inputHandler}>click to show email in console</button>
<br /><br />
    <button onClick={incriment}>click to count</button>
    <p>{count2}</p>
    <button onClick={()=>setCount2(count2+1)}>2nd count</button>
</>
    
  )
}

export default Usestate