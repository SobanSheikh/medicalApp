import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Airplance from "../assets/airplane.svg";
import { toast, Toaster } from "react-hot-toast";

import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const SERVICE_ID = "service_neu7amm";
const TEMPLATE_ID = "template_cojlq1h";
const PUBLIC_KEY = "FjSjHCDP35yVEFBoc";

const Contact: React.FC = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const ContactForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const formRef = useRef<HTMLFormElement | null>(null);
    const [isSending, setIsSending] = useState(false);
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
  
      if (!formRef.current) return;
      setIsSending(true);
  
      emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
          publicKey: PUBLIC_KEY,
        })
        .then(() => {
          toast.success("Message sent successfully!");
          formRef.current?.reset();
          setIsSending(false);
          onClose();
        })
        .catch((err) => {
          console.error(err);
          toast.error("Failed to send message. Please try again.");
          setIsSending(false);
        });
    };
  
    return (
      // Note: The `absolute` positioning is kept from your original code.
      // For this example to render nicely, you might place it inside a `relative` parent container.
      <div className="absolute flex w-[500px] flex-col rounded-2xl border border-stone-200 bg-white p-8 shadow-lg left-[80%] bottom-[120%]">
        {/* --- Form Header --- */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-stone-800">
            Send us a message
          </h2>
          <button
            onClick={onClose}
            className="rounded-full p-1 text-stone-400 transition-colors hover:bg-stone-100 hover:text-stone-600 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2"
            aria-label="Close form"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
  
        {/* --- Form --- */}
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="mb-2 block font-medium text-stone-600">
              Your Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-lg border border-stone-300 bg-stone-50 px-4 py-2 text-stone-800 placeholder:text-stone-400 focus:border-stone-500 focus:outline-none focus:ring-2 focus:ring-stone-500/50"
            />
          </div>
  
          <div>
            <label htmlFor="title" className="mb-2 block font-medium text-stone-600">
              Title
            </label>
            <input
              id="title"
              name="title"
              type="text"
              required
              placeholder="What is this about?"
              className="w-full rounded-lg border border-stone-300 bg-stone-50 px-4 py-2 text-stone-800 placeholder:text-stone-400 focus:border-stone-500 focus:outline-none focus:ring-2 focus:ring-stone-500/50"
            />
          </div>
  
          <div>
            <label htmlFor="message" className="mb-2 block font-medium text-stone-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Write your message here..."
              className="w-full rounded-lg border border-stone-300 bg-stone-50 px-4 py-2 text-stone-800 placeholder:text-stone-400 focus:border-stone-500 focus:outline-none focus:ring-2 focus:ring-stone-500/50"
            />
          </div>
  
          <button
            type="submit"
            className={`w-full rounded-lg px-4 py-3 font-semibold text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-stone-600 focus:ring-offset-2 ${
              isSending
                ? "cursor-not-allowed bg-stone-400"
                : "bg-stone-700 hover:bg-stone-800"
            }`}
            disabled={isSending}
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    );
  };

  return (
    <>
      <Toaster position="top-center" />

      <div className="flex py-10 px-12 mx-10 mb-4 rounded-3xl shadow-xl text-white bg-[#9e8474]">
        <div className="flex flex-col w-full items-center">
          <span className="flex text-4xl underline font-serif">
            {" "}
            Contact Us
          </span>

          <span className="flex text-base mt-2">
            The power of connection begins here.
          </span>
          <span className="flex text-base">
            Whether you’re reaching out to collaborate, inquire about the
            treatments, or book, this space is open to real conversations and
            meaningful exchanges.
          </span>
          <span className="text-base">
            I believe in connection that matters — and I welcome yours
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
              className="object-cover flex bg-white px-2 py-1 rounded-xl h-6 cursor-pointer"
            />

            {showContactForm && (
              <ContactForm onClose={() => setShowContactForm(false)} />
            )}
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
    </>
  );
};

export default Contact;
