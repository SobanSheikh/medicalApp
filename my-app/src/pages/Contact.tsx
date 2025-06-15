import React from "react";
import Airplance from "../assets/airplane.svg";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Contact: React.FC = () => {

const [showContactForm, setShowContactForm] = React.useState(false);

const ContactForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="flex absolute flex-col text-gray-700  w-[500px] left-[80%] bottom-[120%] bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">Send us a message</h2>
        <button 
          onClick={onClose} 
          className="text-gray-500 cursor-pointer hover:text-gray-700 focus:outline-none"
          aria-label="Close form"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <form
        action="https://formsubmit.co/syedshoaibabbas786@gmail.com"
        method="POST"
        className="space-y-5"
      >
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="" />

        <div>
          <label className="block text-gray-700 mb-1 font-medium" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1 font-medium" htmlFor="title">
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1 font-medium" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Send
        </button>
      </form>
    </div>
  );
};


  return (
  <div className="flex  py-10 px-12 mx-10 mb-4 rounded-3xl shadow-xl text-white bg-[#9e8474]">
      <div className="flex flex-col w-full  items-center">
        <span className=" flex text-4xl underline font-serif"> Contact Us</span>

        <span className=" flex text-base mt-2">
          {" "}
          The power of connection begins here.
        </span>
        <span className=" flex text-base">
          Whether you’re reaching out to collaborate, inquire about the
          treatments, or book, this space is open to real conversations and
          meaningful exchanges.
        </span>
        <span className="text-base">
          I believe in connection that matters — and I welcome yours{" "}
        </span>
        <div className="flex mt-6 p-2 justify-between relative font-semibold border rounded-4xl border-red-950">
          <input
            type="text"
            placeholder="Email Us"
            className="text-sm rounded-4xl placeholder:text-white outline-none"
          />
          <img
            src={Airplance}
            alt="Airplane"
            onClick={() => setShowContactForm(!showContactForm)}
            className="object-cover flex bg-white px-2 py-1 rounded-xl h-6"
          />

          {showContactForm && <ContactForm onClose={()=>setShowContactForm(false)} />}
        </div>
        <span className="text-lg font-semibold mt-2"> Contact Now!</span>
        <div className="flex mt-10 gap-24">
          <a
            href="https://www.instagram.com/dr.mashalekic?igsh=MTMwamRzOW1lbzJyMQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-amber-200"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/dr-masha-lekic/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-amber-200"
          >
            <FaLinkedin size={24} />
          </a>
         
          <div className="flex flex-col gap-1">
            <a
              href="https://wa.me/971504981877"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-amber-200"
            >
              <FaWhatsapp size={24} />
            </a>
            <span className="text-xs text-white -ml-8">+971504981877</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
