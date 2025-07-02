import Calender from "./components/Calender";
import HabitCard from "./components/HabitCard";
import Habitform from "./components/Habitform";


const App = () => {
  return (
    <div className=""> 
    <HabitCard
      title="Morning Run"
      description="Go for a 15-minute run."
      completed={true}
    />
    </div>

  );
};

export default App;
