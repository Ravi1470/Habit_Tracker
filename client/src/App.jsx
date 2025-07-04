
import {  Routes, Route } from "react-router-dom";
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
