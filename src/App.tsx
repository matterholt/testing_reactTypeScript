import logo from './logo.svg';
import "./App.css";


import UserForm from './component/UserForm'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>User Profile</h1>
        <UserForm username=""/>
      </header>
    </div>
  );
}

export default App;
