import React, { useState } from 'react'
import Child from './Components/Child'
import dataContext from './Components/Context'
import SubChild from './Components/SubChild'

const App = () => {
const [data,setData] = useState(0)
  return (
    <div>
      <dataContext.Provider value={{data,setData}}>
        <h1>Rendered from App: {data}</h1>
        <button onClick={()=>setData (data + 1)}>Increase btn</button>
          <Child></Child>
          <SubChild></SubChild>
      </dataContext.Provider>
    </div>
  )
}

export default App
