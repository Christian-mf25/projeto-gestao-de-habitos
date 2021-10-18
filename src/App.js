import Habits from './Components/Habits';
import { GlobalStyles } from "./Styles/global";
import Routes from "./Routes";


function App() {
  return (
    <div className="App">

      <header className="App-header">
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
        <Habits />
      </header>
      <GlobalStyles />
      <Routes/>
    </div>
  );
}

export default App;
