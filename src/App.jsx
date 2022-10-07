import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// pages
// import Home from "./pages/Home";
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import NotFound from "./pages/NotFound";
// layout
import Base from "./components/layouts/Base";
// other
import "bootstrap/dist/css/bootstrap.min.css";
import 'animate.css';
import "./app.scss";

function App() {
  return (
    <BrowserRouter>
      <Base>
        <Routes>
          <Route index path="/" element={<Navigate to='/login' />} />
          <Route index path="/login" element={<Login />} />
          <Route index path="/signup" element={<Signup />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Base>
    </BrowserRouter>
  );
}
export default App;
