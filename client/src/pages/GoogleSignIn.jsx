import { FcGoogle } from "react-icons/fc";

function GoogleSignUp() {
  const handleSignUp = () => {
    window.location.href = `${import.meta.env.VITE_BACKEND_URL}/auth/google`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-blue-100 px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Habit Harmony</h1>
        <p className="text-gray-600 mb-6 italic">
          "Build better habits, one day at a time."
        </p>

        <button
          onClick={handleSignUp}
          className="w-full flex items-center justify-center gap-3 border border-gray-300 py-3 px-4 rounded-xl transition-all bg-white hover:bg-gray-100 shadow-md hover:shadow-lg text-lg text-gray-700 font-medium"
        >
          <FcGoogle size={28} />
          <span>Sign up with Google</span>
        </button>

        <p className="mt-6 text-sm text-gray-400">
          Start tracking your habits and transform your routine. 💪
        </p>
      </div>
    </div>
  );
}

export default GoogleSignUp;
