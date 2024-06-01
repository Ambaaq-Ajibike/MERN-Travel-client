import React from 'react';
import { FaFacebook, FaXing, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="container mx-auto text-center">
        <div className="mb-8">
        <Link to="/">  <h1
          className="text-2xl md:text-4xl font-bold relative"
          style={{
            display: 'inline-block',
            color: "transparent",
            WebkitTextStroke: "0.7px",
            WebkitTextStrokeColor: "#000",
          }}
        >
          Come
          <span
            className="shadow-xl rounded-lg text-slate-700 text-lg md:text-2xl absolute left-1 top-[-10px] text-center"
            style={{
              WebkitTextStroke: "0",
            }}
          >
            Dream Tours
          </span>
        </h1></Link>
          <ul className="flex justify-center space-x-6 text-gray-600 mt-4">
            <li><a href="#about">About us</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms & Conditions</a></li>
          </ul>
        </div>
        <div className="mb-8">
          <ul className="flex justify-center space-x-4 text-orange-500">
            <li><a href="https://facebook.com"><FaFacebook size={24} /></a></li>
            <li><a href="https://xing.com"><FaXing size={24} /></a></li>
            <li><a href="https://linkedin.com"><FaLinkedin size={24} /></a></li>
            <li><a href="https://instagram.com"><FaInstagram size={24} /></a></li>
            <li><a href="https://youtube.com"><FaYoutube size={24} /></a></li>
          </ul>
        </div>
        <div className="text-gray-600">
          <p>© 2024Dream Come Tours</p>
          {/* <p>
            Designed and Developed By{' '}
            <a href="https://technoheaven.com" className="text-orange-500">
              Technoheaven Consultancy Pvt. Ltd.
            </a>
          </p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
