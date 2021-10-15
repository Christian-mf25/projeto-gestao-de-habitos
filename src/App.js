import { GlobalStyles } from "./Styles/global";
import Card from "./Components/Card";
import CardAdd from "./Components/CardAdd";

function App() {
  return (
    <div>
      <GlobalStyles />
      <header>
        <CardAdd />
        <Card />
      </header>
    </div>
  );
}

export default App;
