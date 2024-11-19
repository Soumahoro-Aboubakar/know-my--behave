import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 justify-around items-center md:grid-cols-2 gap-8 place-items-center">
          {/* Logo & Description */}
          <div>
            <h2 className="text-3xl font-extrabold text-white tracking-wide">RimCov</h2>
            <p className="mt-4 text-gray-400 max-w-xs leading-relaxed">
               RimCov helps recruiters and parents understand social media behavior.
            </p>
          </div>

          {/* Social Media & Contact */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-6 text-gray-400">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition duration-200"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition duration-200"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition duration-200"
              >
                <FaLinkedinIn size={24} />
              </a>
            </div>
            <h3 className="text-xl font-semibold text-white mt-8">Contact</h3>
            <div className="mt-4 space-y-2 text-gray-400">
              <p className="flex items-center hover:text-gray-100 transition duration-200">
                <AiOutlineMail className="mr-3" /> something@rimcov.com
              </p>
              <p className="flex items-center hover:text-gray-100 transition duration-200">
                <AiOutlinePhone className="mr-3" /> +225 1 23 45 67 89
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} RimCov. All Right reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
