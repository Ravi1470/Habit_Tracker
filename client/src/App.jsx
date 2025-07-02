import Calender from "./components/Calender";
import HabitCard from "./components/HabitCard";
import Habitform from "./components/Habitform";


const App = () => {
  return (
    <div className=""> 
    <HabitCard
     title="Drinking Water"
     description="Drink 8 glasses of water daily"
     completed={true}
     currentStreak={7}
    />

    </div>

  );
};

export default App;
