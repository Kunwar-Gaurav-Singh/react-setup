import "./App.css";
import { Route, Routes } from "react-router-dom";
import Test from "./components/TestComp";

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/service" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
