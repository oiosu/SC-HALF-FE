import logo from './logo.svg';
import './App.css';
import TextComponent from './component/TextComponent';
import Section from './component/Section';

function App() {
  return (
    <div className="App">
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
        <TextComponent />
        <Section />
      </header>
    </div>
  );
}

export default App;
