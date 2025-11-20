import React from 'react'
import ComponentC from './ComponentC'

const ComponentB = () => {
  return (
    <>
      <div className="box">
        <h2>ComponentB</h2>
        <ComponentC/>
      </div>
    </>
  )
}

export default ComponentB
