import React, { useContext, useState } from 'react'
import mycontext from './Contextapi'

function DComp() {
    const {text,setchild} = useContext(mycontext)
    const [data, setdata] = useState("")
  return (
    <div>
        <h1 >D COMPONENT</h1>
        <h2 style={{color:'red'}}>value: {text}</h2>
        <h1>from D to A componet</h1>
        <input type="text" name="" id="" onChange={(e)=>setdata(e.target.value)} />&nbsp;&nbsp;
        <button onClick={()=>setchild(data)}>send data to A</button>
    </div>
    
  )
}

export default DComp