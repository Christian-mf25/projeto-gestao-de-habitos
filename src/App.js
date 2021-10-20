import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalStyles } from "./Styles/global";
import Routes from "./Routes";

function App() {
  return (
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
  );
}

export default App;
