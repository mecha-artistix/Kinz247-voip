import "./App.css";
import Header from "./components/Header";
import LeftPanel from "./components/LeftPanel";
import Dashboard from "./components/Dashboard";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="container mx-auto h-screen">
      <div className="grid-container">
        <BrowserRouter basename="/Kinz247-voip/">
          <Header />
          <LeftPanel />
          <Dashboard />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
