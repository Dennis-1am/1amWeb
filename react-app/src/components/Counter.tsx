import React from 'react'

interface Props {
    count: number
}

function Counter({ count }:Props) {
  return (
    <div>
        <h1>Task Finished</h1>
        <h2>{count}</h2>
    </div>
  )
}

export default Counter