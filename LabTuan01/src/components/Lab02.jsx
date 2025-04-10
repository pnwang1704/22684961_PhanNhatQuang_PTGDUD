import { useState } from "react";
export default function Lab02()
{
    var [a,setA]= useState(0);
    var [b,setB]= useState(0);
    const [operator, setOperator] = useState('+');
    var [result,setResult]= useState(0);
    function handleChangeA(e)
    {
        setA(parseInt(e.target.value));
    }
    function handleChangeB(e)
    {
        setB(parseInt(e.target.value));
    }
    function handleChange(e)
    {
        setOperator(e.target.value)
    }
    function handleClick(e)
    {
        if(operator== '+')
        {
            setResult(a+b);
        }
        else if(operator== '-')
        {
            setResult(a-b);
        }
        else if(operator== '*')
        {
            setResult(a*b);
        }
        else
        {
            setResult(a/b);
        }
    }
    return(
        <>
          <input type="text" onChange={handleChangeA} placeholder="input A"/>
            <br />
            <input type="text" onChange={handleChangeB} placeholder="input B"/>
           <br />
           <input type="radio" onChange={handleChange} name="group" value='+'/>+
           <input type="radio" onChange={handleChange} name="group" value='-'/>-
           <input type="radio" onChange={handleChange} name="group" value='*'/>*
           <input type="radio" onChange={handleChange} name="group" value='/'/>/
           <br />
           <button onClick={handleClick}>Click!</button>
           <br />
           <span>{result}</span>
        </>
    )
}