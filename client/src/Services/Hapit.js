import axios from "axios";

export const createHabit = async (habits) => {
  return axios.post("http://localhost:3000/api/habits", habits);
};

export const GetHabit = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/habits");
    return response.data;
  } catch (error) {
    console.error("Error fetching habits:", error);
    throw error;
  }
};

export const deleteHabit = async (id) => {
  const response = await axios.delete(`http://localhost:3000/api/habits/${id}`);
  return response.data;
};
