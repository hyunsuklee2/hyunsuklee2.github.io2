import logo from './selfie.PNG';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My name is Hyunsuk Lee AKA Jerry and I'm going to Master React! And this terminal stuff is confusing af!!!
        </p>
        <a
          className="App-link"
          href="https://github.com/hyunsuklee2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Me Out!!!
        </a>
      </header>
    </div>
  );
}

export default App;
