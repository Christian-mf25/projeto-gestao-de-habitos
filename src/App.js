import { GlobalStyles } from "./Styles/global";
import Routes from "./Routes";
import {GroupsProvider} from "./Providers/Groups/groups";

function App() {
  return (
    <GroupsProvider>
      <div className="App">
        <GlobalStyles />
        <Routes/>
      </div>
    </GroupsProvider>
  );
}

export default App;
