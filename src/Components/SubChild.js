import React, { useContext } from 'react'
import dataContext from './Context'


const SubChild = () => {
const new_variable = useContext(dataContext)

  return (
    <div>
      <h3>subchild: {new_variable.data}</h3>
      <button onClick={() => new_variable.setData(new_variable.data + 1)}>SubData incrrease</button>
    </div>
  )
}

export default SubChild
