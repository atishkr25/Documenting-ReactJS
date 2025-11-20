import React from 'react'
import ComponentB from './ComponentB'

const ComponentA = () => {
  return (
    <>
      <div className="box">
        <h2>ComponentA</h2>
        <ComponentB/>
      </div>
    </>
  )
}

export default ComponentA;
