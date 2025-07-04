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
    </div>
  );
}

export default GoogleSignIn;
