import { Link } from "react-router-dom";
import HabitList from "../components/HabitList";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";

const Habit = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/auth/me`,
          {
            credentials: "include",
          }
        );

        if (response.ok) {
          const data = await response.json();
          setUser(data.user);
        } else {
          navigate("/login");
        }
      } catch (error) {
        console.error("Error fetching user:", error);
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/auth/logout`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        setUser(null);
        navigate("/login");
      } else {
        console.error("Failed to logout");
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  console.log(user);
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-800 text-white">
        <p className="text-xl font-semibold animate-pulse">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white">
      {/* Header */}
      <header className="h-20 px-6 flex justify-between items-center bg-gray-900 shadow-md border-b border-slate-700">
        <h1 className="text-2xl font-bold"> MicroHabits</h1>
        <div className="flex gap-4 items-center">
          <Link
            to="/CreateForm"
            className="bg-indigo-500 hover:bg-indigo-400 text-white px-4 py-2 rounded-lg text-sm font-semibold transition duration-200 shadow hover:shadow-indigo-500/40">
            + Create Habit
          </Link>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 cursor-pointer rounded-lg flex items-center gap-2 transition-all shadow hover:shadow-red-500/30">
            <LogOut size={18} />
            Logout
          </button>
          <button className="cursor-pointer ">
            <img
              src={user?.picture}
              alt={user?.name}
              className=" rounded-full h-14"
            />
          </button>
        </div>
      </header>
      {/* Greeting (Optional) */}
      {user && (
        <div className="text-center py-4 text-lg font-medium text-gray-300">
          Welcome back,{" "}
          <span className="text-white font-bold">{user?.name}</span>
        </div>
      )}
      {/* Main Habit List Section */}
      <main className="p-6 max-w-7xl mx-auto">
        <HabitList />
      </main>
    </div>
  );
};

export default Habit;
