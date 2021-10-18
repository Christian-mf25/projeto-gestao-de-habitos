import { GlobalStyles } from "./Styles/global";
import MyGroups from "./Pages/MyGroups/MyGroups";
import NewGroup from "./Components/NewGroup";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <MyGroups />
      <NewGroup />
    </div>
  );
}

export default App;
