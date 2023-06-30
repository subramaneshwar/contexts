import React, { useContext } from 'react'
import mycontext from './Contextapi'
import DComp from './DComp'

function Ccomp() {
    const {Ccomp} = useContext(mycontext)
  return (
    <div>
        <h1>C componet</h1>
        <h3 style={{color:'blue'}} >b comp value : {Ccomp}</h3>
        <DComp/>
    </div>
  )
}

export default Ccomp