import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Classes from "./pages/classes/Classes";
import Class from "./pages/class/Class";
import Create from "./pages/create/Create";
import Trainers from "./pages/trainers/Trainers";
import Trainer from "./pages/trainer/Trainer"
import Checkout from "./pages/checkout/Checkout"
import Health from "./pages/health/Health"
import About from "./pages/about/About"
import Profile from "./pages/profile/Profile"
import Login from "./pages/login/Login";
import Messenger from "./pages/messenger/Messenger";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/class" element={<Classes />} />
        <Route path="/create" element={<Create />} />
        <Route path="/class/:id" element={<Class />} />
        <Route path="/trainers/:id" element={<Trainer />} />
        <Route path="/health" element={<Health />} />
        <Route path="/messenger" element={<Messenger />} />
        <Route path="/about" element={<About />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
