// import { useQuery } from "@tanstack/react-query";
// import { getHabit } from "../Services/Hapit";
// import React from "react";

// const HabitList = () => {
//   const { data, isLoading, isError, error } = useQuery({
//     queryKey: ["gethabit"],
//     queryFn:()=> getHabit(),
//   });

//   if (isLoading) return <p>Loading habits...</p>;

//   if (isError) return <p>Error: {error.message}</p>;
//   console.log(data);
//   return <div></div>;
// };

// export default HabitList;
