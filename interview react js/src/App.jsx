import React, { useState } from 'react'

const App = () => {

 const [value,setvalue] = useState(1)
 const [multipliedvalue, setmultipliedvalue] = useState(1)

 const multiplybyfive = () => {
setmultipliedvalue(value * 5)
setvalue(value+1)
 }


  return (
    <div>
   <h1>Main valu:{value}</h1>
   <button onClick={multiplybyfive}
   >multiply by 5</button>
   <h2>Multiply value:{multipliedvalue}</h2>
      </div>
  )
}

export default App