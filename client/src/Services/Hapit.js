import axios from "axios";

const createHabit = async () => {
  return axios.post("http://localhost:3000/api/habits");
};
export const getHabit = async () => {
  return axios.get("http://localhost:3000/api/habits");
};


