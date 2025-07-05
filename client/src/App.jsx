import { Routes, Route } from "react-router-dom";
import GoogleSignIn from "./pages/GoogleSignIn";
import Habit from "./pages/Habit";
import Habitform from "./pages/Habitform";

const App = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/login"
          element={<GoogleSignIn />}
        />
        <Route
          path="/"
          element={<Habit />}
        />
        <Route
          path="/CreateForm"
          element={<Habitform />}
        />
      </Routes>
    </div>
  );
};

export default App;
