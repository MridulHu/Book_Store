import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email && password) {
      localStorage.setItem("loggedIn", "true");
      navigate("/");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="w-full max-w-sm p-6 bg-gray-800 rounded shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 mb-4 text-black rounded focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 mb-6 text-black rounded focus:outline-none"
        />
        <button
          onClick={handleLogin}
          className="w-full py-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded transition duration-300"
        >
          Login
        </button>
        <p className="text-center mt-4">
          Don't have an account?{" "}
          <span
            className="text-green-400 hover:underline cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            Create one
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
