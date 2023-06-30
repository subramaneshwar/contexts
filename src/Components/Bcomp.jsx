import React from 'react'
import { useContext } from 'react'
import Ccomp from './Ccomp'
import mycontext from './Contextapi'

function Bcomp() {
    const {setCcomp} = useContext(mycontext)
  return (
    <div>
        <h1>B Componet</h1>
        <input type="text" onChange={(e)=>setCcomp(e.target.value)} />
        <Ccomp/>
    </div>
  )
}

export default Bcomp