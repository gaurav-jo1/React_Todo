import "./App.scss";
import { Routes, Route, Link } from "react-router-dom";
import { Important, My_Day} from "./container";
import { Home } from "./components";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MyDay" element={<My_Day />} />
        <Route path="/Important" element={<Important />} />
      </Routes>
    </div>
  );
}

export default App;
