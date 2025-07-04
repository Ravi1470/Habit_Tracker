import { Route, Routes } from "react-router-dom";
import Calender from "./components/Calender";
import HabitCard from "./components/HabitCard";
import Habitform from "./components/Habitform";
import GoogleSignIn from "./pages/GoogleSignIn";
import Home from "./pages/Home";


const App = () => {
  return (
   <div>
    <Routes>
      <Route path="/login" element={<GoogleSignIn />} />
      <Route path="/" element={<Home />} />
    </Routes>
   </div>
  );
};

export default App;
