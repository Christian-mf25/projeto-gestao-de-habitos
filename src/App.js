import 'react-toastify/dist/ReactToastify.css'
import {ToastContainer} from "react-toastify"
import Routes from "./Routes";

function App() {
  return (
    <div className="App">
      <Routes />
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
    </div>
  );
}

export default App;
