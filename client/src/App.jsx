import { Routes, Route } from "react-router-dom";
import GoogleSignIn from "./pages/GoogleSignIn";
import Habit from "./pages/Habit";
import Habitform from "./pages/Habitform";
import CountTime from "./components/ui/Form/CountTime"
import SevenDaysStrike from "./components/SevenDaysStrike";

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
        <Route
          path="/Strike"
          element={<SevenDaysStrike />}
        />
      </Routes>
    </div>
  );
};

export default App;
