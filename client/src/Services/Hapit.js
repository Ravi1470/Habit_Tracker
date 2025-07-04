import axios from "axios";

export const createHabit = async (habits) => {
  return axios.post("/api/habits", habits);
};

export const GetHabit = async () => {
  try {
    const response = await axios.get("/api/habits");
    return response.data;
  } catch (error) {
    console.error("Error fetching habits:", error);
    throw error;
  }
};

export const deleteHabit = async (id) => {
  const response = await axios.delete(`/api/habits/${id}`);
  return response.data;
};
