import logo from './logo.svg';
import './App.css';
import VerticalNavBar from './components/VerticalNavBar';

function App() {
  return (
    <div className="App">
      <VerticalNavBar /> {/* Add the VerticalNavBar component here */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

