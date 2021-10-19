import "react-toastify/dist/ReactToastify.css";
import { GlobalStyles } from "./Styles/global";
import { ToastContainer } from "react-toastify";
import Habits from "./Components/Habits";
import Routes from "./Routes";
import { GroupsProvider } from "./Providers/Groups";
import { GroupProvider } from "./Providers/Group";
import { AuthProvider } from "./Providers/Auth";

function App() {
  return (
    <GroupsProvider>
      <div className="App">
        <ToastContainer
          position="top-right"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <GlobalStyles />
        <Routes />
      </div>
    </GroupsProvider>
  );
}

export default App;
