import "./App.css";
import Header from "./components/Header";
import LeftPanel from "./components/LeftPanel";
import Dashboard from "./components/Dashboard";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter basename="/Kinz247-voip/">
      <div className="mx-auto  w-screen max-w-[2000px]">
        <header className="sticky top-0 z-10 h-24  w-full bg-white">
          <Header />
        </header>
        <main className="flex w-full border  border-black">
          <LeftPanel />
          <Dashboard />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
