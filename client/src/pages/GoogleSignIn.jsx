<<<<<<< HEAD
import { LogIn } from "lucide-react";

function GoogleSignIn() {
  const handleLogin = () => {
    window.location.href = `${import.meta.env.VITE_BACKEND_URL}/auth/google`;
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-pink-100">
      <header className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-indigo-600">MyApp</h1>
          <button
            onClick={handleLogin}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-all"
          >
            <LogIn size={18} />
            Login
          </button>
      </header>
=======
import React, { useEffect, useState } from "react";
import UserProfile from "../components/UserProfile";

function GoogleSignIn() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/me`,{
            method: "GET",
            credentials: "include", // Include cookies in the request
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
        } else {
          console.error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, []);

  const handleLogin = () => {
    console.log(import.meta.env.VITE_BACKEND_URL);
    window.location.href = `${import.meta.env.VITE_BACKEND_URL}/auth/google`;
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Google OAuth Login</h1>
      {!user ? (
        <button onClick={handleLogin}>Login with Google</button>
      ) : (
        <UserProfile user={user.user} />
      )}
>>>>>>> d35b3a13d2771b5a88aa32c4387dfc4e3cc7c1d4
    </div>
  );
}

export default GoogleSignIn;
