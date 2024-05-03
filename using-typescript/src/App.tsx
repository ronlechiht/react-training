import { useState } from "react";

const [enabled, setEnabled] = useState<boolean>(false)

type Status = "idle" | "loading" | "success" | "error";
const [status, setStatus] = useState<Status>("idle");

type RequestState =
  | {status: 'idle'}
  | {status: 'loading'}
  | {status: 'success', data: any}
  | {status: 'error', error: Error}
const [requestState, setRequestState] = useState<RequestState>({status: 'idle'})

interface MyButtonProps {
  title: string;
  disabled: boolean;
}

function MyButton({ title, disabled }: MyButtonProps) {
  return (
    <button disabled={disabled}>{title}</button>
  );
}

function App() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton title="I'm a button" disabled={true}/>
    </div>
  );
}

export default App
