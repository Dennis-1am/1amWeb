import { useRef, useState } from 'react';
import Button from './components/Button';
import InputBox from './components/InputBox';
import MessageList from './components/MessageList';

export default function App() {

  

  const [inputValue, setInputValue] = useState<string>('');

  const [messages, setMessages] = useState<string[]>([])

  // adds the input value to the inputList array when the button is clicked
  const handleOnClick = () => {
    setMessages([...messages, inputValue]);
    console.log(messages)
  }


  return (
    <div>
      <InputBox placeholder="Enter your name" onChange={(e) => setInputValue(e.target.value)}/>
      <MessageList messages={messages}/>
      <Button color="primary" onClick={handleOnClick}>Submit</Button> 
    </div>
  );
}