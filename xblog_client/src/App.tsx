import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-2">
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <footer>footer </footer>
    </div>
  );
};

export default App;
