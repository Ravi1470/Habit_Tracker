import React from "react";
import { useQuery } from "@tanstack/react-query";
import { GetHabit } from "../Services/Hapit";
import HabitCard from "./HabitCard";
import { Link } from "react-router-dom";

const HabitList = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["gethabit"],
    queryFn: GetHabit,
  });

  if (isLoading) return <p>Loading habits...</p>;
  if (isError) return <p>Error: {error.message}</p>;
  console.log(data);

  return (
    <div className="space-y-4 grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-lg">
      
      {data?.map((habit) => (
        <HabitCard
          key={habit?._id}
          habit={habit}
        />
      ))}
    </div>
  );
};

export default HabitList;
