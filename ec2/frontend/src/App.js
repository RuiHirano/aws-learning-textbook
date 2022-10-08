import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is {process.env.REACT_APP_SERVER} App.
        </p>
      </header>
    </div>
  );
}

export default App;
