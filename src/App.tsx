import { useState} from 'react'
import logo from './logo.svg';
import "./App.css";


import UserForm from './component/userForm/UserForm';
import AsyncExample from './component/async/AsyncExample'


function ViewController({ status }: {status:string}) {
  
  if (status === 'userForm') {
    return (
        <UserForm username=""/>
    )
  }
    if (status === 'asyncExample') {
    return (
        <AsyncExample/>
    )
  }
if (status === 'none'){
  return (
    <h2>Collection Of Codes</h2>
  )}
  return null
} 


function App() {
  const [viewStatus , setViewStatus] = useState('asyncExample')

  return (
    <div className="App">
        <ul className="action_display">
          <li>
            <button onClick={()=> setViewStatus('none')}>None</button>
        </li>
                  <li>
            <button onClick={() => setViewStatus('userForm')}>User Form</button>
        </li>
            <li>
            <button onClick={() => setViewStatus('asyncExample')}>Async</button>
          </li>
        </ul>
      <header className="App-header">
        <ViewController status={ viewStatus }/>
      </header>
    </div>
  );
}

export default App;
