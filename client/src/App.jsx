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
  );
};

export default App;
