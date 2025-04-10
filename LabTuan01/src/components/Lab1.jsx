import { useState } from "react";
export default function Lab01()
{
    var [a,setA]= useState(0);
    var [b,setB]= useState(0);
    var [result,setResult]= useState(0);

    function handleChangeA(e)
    {
        setA(parseInt(e.target.value));
    }
    function handleChangeB(e)
    {
        setB(parseInt(e.target.value));
    }
    function handleClick(e)
    {
        setResult(a+b);
    }
    return (
        <>
            <input type="text" onChange={handleChangeA} placeholder="input A"/>
            <br />
            <input type="text" onChange={handleChangeB} placeholder="input B"/>
           <br />
           <button onClick={handleClick}>Click!</button>
           <br />
           <span>{result}</span>
        </>
    )
}