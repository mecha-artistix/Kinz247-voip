import "./App.css";
import Header from "./components/Header";
import LeftPanel from "./components/LeftPanel";
import Dashboard from "./components/Dashboard";
function App() {
  return (
    <>
      <div className="container mx-auto h-screen">
        <div className="grid-container">
          <Header />
          <LeftPanel />
          <Dashboard />
        </div>
      </div>
    </>
  );
}

export default App;
