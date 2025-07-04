<<<<<<< HEAD
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
=======
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Habit from "./pages/Habit";
import HabitForm from "./pages/Habitform";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Habit />}
        />
        <Route
          path="/CreateForm"
          element={<HabitForm />}
        />
      </Routes>
    </Router>
>>>>>>> d35b3a13d2771b5a88aa32c4387dfc4e3cc7c1d4
  );
};

export default App;
