import { GlobalStyles } from "./Styles/global";
import Card from "./Components/Card";
import CardAdd from "./Components/CardAdd";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <CardAdd />
      <Card />
    </div>
  );
}

export default App;
