import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold">Assignment by Uzma Mumtaz</h2>
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} All Rights Reserved</p>
        </div>

        {/* Right Section - Social Media Links */}
        <div className="flex space-x-6 justify-center md:justify-start">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300 text-3xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300 text-3xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300 text-3xl"
          >
            <FaTwitter />
          </a>
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300 text-3xl"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </footer>
  );
}
