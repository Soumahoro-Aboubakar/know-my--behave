import "../styles/login.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { useLocalStorage } from "react-use";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  // Note: Before yous start, you have to know this app does not handle authentication via Facebook, Instagram, or Twitter.
  const [users] = useLocalStorage("users", []); //this contain all users in local
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Check if email and password are filled
    if (!email || !password) {
      toast.error("Please fill in all fields!");
      return;
    }
    // Check if the email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address!");
      return;
    }

    // Validate user credentials
    const userExists = users.find(
      (user) => user.email === email && user.password === password
    );

    if (!userExists) {
      toast.error("Invalid email or password!");
      return;
    }

    toast.success("Login successful!");
    setTimeout(() => navigate("/home"), 2000); // Redirect user at home route after 2 seconds
  };

  return (
    <div className="h-screen flex justify-center items-center bg-[url('https://wpassets.porttechnology.org/wp-content/uploads/2021/03/19143827/iStock-623431736.jpg')] bg-cover bg-center">
      <ToastContainer position="top-right" />
      <div className="w-full max-w-md p-10 bg-white shadow-2xl mx-4 rounded-lg border border-gray-200 shadow-slate-100">
        <h1 className="text-4xl font-semibold text-center text-gray-800 mb-4 tracking-tight">
          Welcome Back
        </h1>
        <p className="text-lg text-center text-gray-500 mb-8">
          Log in to your account
        </p>

        {/* Login Form */}
        <div className="space-y-5">
          {/* Email Input */}
          <div>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder-gray-400 text-gray-100"
            />
          </div>

          {/* Password Input */}
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder-gray-400 text-gray-100"
            />
          </div>

          {/* Forgot Password Link */}
          <div className="text-right">
            <button
              onClick={() => toast.success("Oups this part is not handle yet")}
            >
              <a className="text-sm text-blue-600 hover:underline cursor-pointer">
                Forgot Password?
              </a>
            </button>
          </div>
        </div>

        {/* Login Button */}
        <div className="mt-8">
          <button
            onClick={handleLogin}
            className="w-full py-3 px-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300"
          >
            Log In
          </button>
        </div>

        {/* Social Media Login */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500 mb-4">Or log in with</p>
          <div className="flex justify-center space-x-4">
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 transition duration-300"
            >
              <FaFacebook size={30} />
            </a>
            <a
              href="#"
              className="text-pink-500 hover:text-pink-700 transition duration-300"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="#"
              className="text-blue-400 hover:text-blue-600 transition duration-300"
            >
              <FaTwitter size={30} />
            </a>
          </div>
        </div>

        {/* Signup Redirect */}
        <div className="mt-6 text-center">
          <span className="text-sm text-gray-500">
            New here?{" "}
            <a href="/signup" className="text-blue-600 hover:underline">
              Create an account
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
