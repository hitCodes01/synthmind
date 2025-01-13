import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import axios from "axios"; 
import heroBackground from "../../assets/background.jpg";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = { name, email, password };
      
      const response = await axios.post("https://backend-chatbot-ai.onrender.com/api/users/signup", userData);
      
      const { token } = response.data;

      // Storing the token in localStorage or a state management solution
      localStorage.setItem("token", token);
      console.log("Registration successful, token stored.");

      setError("Registration successful. Redirecting to Sign In...");
      setTimeout(() => {
        navigate("/signin"); 
      }, 3000);
    } catch (error) {
      console.error("Error signing up:", error.message);
      setError(error.response ? error.response.data.message : "An error occurred"); // Set the error message
    }
  };

  return (
    <div className="relative min-h-screen bg-cover bg-no-repeat" style={{ backgroundImage: `url(${heroBackground})` }}>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-6xl font-bold mb-4 text-white text-center">Sign Up</h2>
        <div className="w-full max-w-lg p-12 bg-gray-800 bg-opacity-80 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required // Add required attribute
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required // Add required attribute
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required // Add required attribute
              />
            </div>
            {error && <p className="text-red-500 text-center">{error}</p>}
            <button type="submit" className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Sign Up
            </button>
          </form>
          <p className="text-center text-gray-300 mt-4">
            Already have an account?{" "}
            <Link to="/signin" className="text-blue-400 hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
