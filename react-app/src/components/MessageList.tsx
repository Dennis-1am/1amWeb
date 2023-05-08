import React from 'react'

interface Props {
  messages: string[];
}

// let messages: string[] = ["Hello", "World"]

function MessageList({messages}: Props) {
  console.log(messages);
  return (
    <>
    <h1>{messages}</h1>
    <ul className='list-group'>  
      {messages.map((message, index) => (
        <li key = {index}>
          {message}
        </li>
      ))}
    </ul>
    </>
  )
}

export default MessageList