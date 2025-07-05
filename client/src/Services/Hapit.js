import axios from "axios";

export const createHabit = async (habits) => {
  return axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/habits`, habits, {
    withCredentials: true,
  });
};

export const GetHabit = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/habits`,
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching habits:", error);
    throw error;
  }
};

export const deleteHabit = async (id) => {
  const response = await axios.delete(
    `${import.meta.env.VITE_BACKEND_URL}/api/habits/${id}`,
    { withCredentials: true }
  );
  return response.data;
};
