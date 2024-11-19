import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { useLocalStorage } from "react-use";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  // Note: Before yous start, you have to know this app does not handle authentication via Facebook, Instagram, or Twitter.
  const [users, setUsers] = useLocalStorage("users", []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false); // Track terms acceptance
  const navigate = useNavigate();

  const handleSignup = () => {
    // Check if all fields are filled
    if (!email || !password || !confirmPassword) {
      toast.error("All fields are required!");
      return;
    }
  
    // Check if the email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address!");
      return;
    }
  
    // Check if passwords match
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
  
    // Check if terms and conditions are accepted
    if (!acceptedTerms) {
      toast.error("You must accept the Terms of Service to sign up!");
      return;
    }
  
    const newUser = { email, password };
  
    // Check if user already exists
    const userExists = users.some((user) => user.email === email);
    if (userExists) {
      toast.error("User already exists!");
      return;
    }
  
    // Add user to localStorage
    setUsers([...users, newUser]);
    toast.success("Account created successfully!");
  
    // Redirect to home after a delay (2s)
    setTimeout(() => navigate("/home"), 2000);
  };
  

  return (
    <div className="h-screen flex p-4 justify-center items-center bg-[url('https://wpassets.porttechnology.org/wp-content/uploads/2021/03/19143827/iStock-623431736.jpg')] bg-cover bg-center">
      <ToastContainer position="top-right" />
      <div className="w-full max-w-md p-10 bg-white shadow-2xl rounded-lg border border-gray-200 shadow-slate-100">
        <h1 className="text-4xl font-semibold text-center text-gray-800 mb-4 tracking-tight">
          Create Account
        </h1>
        <p className="text-lg text-center text-gray-500 mb-8">
          Sign up to get started
        </p>

        {/* Signup Form*/}
        <div className="space-y-5">
          {/* Email Field */}
          <div>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder-gray-400 text-gray-100"
            />
          </div>

          {/* Password Field */}
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder-gray-400 text-gray-100"
            />
          </div>

          {/* Confirm Password Field */}
          <div>
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder-gray-400 text-gray-100"
            />
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              id="terms"
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
              className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-600"
            />
            <label htmlFor="terms" className="text-sm text-gray-500">
              I agree to the{" "}
              <a href="/terms" className="text-blue-600 hover:underline">
                Terms of Service
              </a>
            </label>
          </div>
        </div>

        {/* Signup Button */}
        <div className="mt-8">
          <button
            onClick={handleSignup}
            className="w-full py-3 px-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300"
          >
            Sign Up
          </button>
        </div>

        {/* Social Media Signup */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500 mb-4">Or sign up with</p>
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

        {/* Redirect to Login */}
        <div className="mt-6 text-center">
          <span className="text-sm text-gray-500">
            Already have an account?{" "}
            <a href="/login" className="text-blue-600 hover:underline">
              Log In
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
