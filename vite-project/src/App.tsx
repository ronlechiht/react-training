import './App.css'
import { MouseEventHandler, useState } from 'react';

function MyButton({ count, onClick }: {count: number, onClick: MouseEventHandler}) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  )
}

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

export default App
