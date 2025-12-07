import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="text-center">
      <Navbar />
      <Outlet />
    </div>
  );
}
