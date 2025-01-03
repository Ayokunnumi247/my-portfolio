import "bootstrap/dist/css/bootstrap.min.css";
import SetNavbar from "./SetNavbar";
import Home from "./Home.js";

import "./App.css";

function App(props) {
  return (
    <div className="App">
      <SetNavbar />
      <Home />
    </div>
  );
}

export default App;
