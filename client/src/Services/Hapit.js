import axios from "axios";

export const createHabit = async (habits) => {
  return axios.post("http://localhost:3000/api/habits", habits);
};

export const getHabit = async () => {
  const res = await axios.get("http://localhost:3000/api/habits"); // adjust API path
  return res.data; // make sure the backend sends data in expected format
};
