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
    </div>
  );
}

export default GoogleSignIn;
