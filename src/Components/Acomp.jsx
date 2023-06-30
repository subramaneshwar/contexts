import React, { useState } from 'react'
import Bcomp from './Bcomp'
import mycontext from './Contextapi'
function Acomp() {
    const [text, settext] = useState("")
    const [inp, setinp] = useState("")
    const [child, setchild] = useState("")
    const [Ccomp, setCcomp] = useState("")

  return (
    <div>
        <h1>A COMPONET</h1>
        <input type="text" onChange={(e)=>setinp(e.target.value)} />
        &nbsp;&nbsp;
        <button onClick={()=>settext(inp)} >send to D</button>
        <h2 style={{color:'green'}}>Child Data: {child}</h2>
        <mycontext.Provider value={{text,setchild,Ccomp, setCcomp}}>
        <Bcomp/>
        </mycontext.Provider>
    </div>
  )
}

export default Acomp