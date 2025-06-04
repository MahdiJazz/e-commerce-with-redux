import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import "../index.css";

const Footer = () => {
  return (
    <footer className="bg-cyan-100 text-black font-semibold py-4 w-full">
      <div className="containers mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
        <div className="text-center sm:text-left mb-4 sm:mb-0">
          <p>
            {" "}
            <a target="_blank" href="https://mahdi-jazini.vercel.app">
              Jazz Shop
            </a>{" "}
            &copy; {new Date().getFullYear()} | All rights reserved
          </p>
        </div>
        <div className="flex space-x-4">
          <a
            href="https://mahdi-jazini.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-slate-900"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a
            href="https://mahdi-jazini.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-slate-900"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://mahdi-jazini.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-slate-900"
          >
            <FontAwesomeIcon icon={faGlobe} size="2x" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
