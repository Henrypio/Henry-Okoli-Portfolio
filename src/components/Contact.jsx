import React, { useRef } from "react";
import emailjs from "emailjs-com";
import Footer from "./Footer";
import Header from "./Header";
import support from "../assets/support.png";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3dhejpw", // Your service ID
        "template_g3632se", // Your template ID
        form.current,
        "6RpnGLk26c6TwTs5S" // Your public key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert(
            "Failed to send the message. Please check your input and try again."
          );
        }
      );
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <h2 className="text-3xl sm:text-4xl text-[#FFA75B] font-bold text-center mt-8 mb-6">
        Contact
      </h2>
      <main className="flex-grow flex flex-col md:flex-col lg:flex-row items-center justify-center px-4 mb-12">
        <section className="mb-6 md:mb-0 md:mr-8 flex flex-col items-center">
          <img
            src={support}
            alt="Support Illustration"
            className="bg-black rounded-xl object-cover max-w-xs md:max-w-sm lg:max-w-md"
            aria-label="Support Illustration"
          />
          <p className="text-white text-lg sm:text-xl mt-4 md:mx-24 text-center md:text-left px-4 md:px-0">
            If you have any questions, need help, or just want to say hi, please
            don't hesitate to reach out.
          </p>
        </section>
        <section
          ref={form}
          onSubmit={sendEmail}
          className="bg-black shadow-lg rounded-lg p-6 sm:p-8  max-w-lg w-full"
        >
          <form>
            <input type="hidden" name="to_name" value="Henry" />
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="from_name"
              >
                Name
              </label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                placeholder="enter your name here"
                className="shadow border border-[#FFA75B] rounded w-full py-2 px-3 text-black bg-gray-200"
                required
                aria-label="Your Name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="from_email"
              >
                Email
              </label>
              <input
                type="email"
                id="from_email"
                name="from_email"
                placeholder="enter your email here"
                className="shadow border border-[#FFA75B] rounded w-full py-2 px-3 text-black bg-gray-200"
                required
                aria-label="Your Email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="enter your message here"
                className="shadow border border-[#FFA75B] h-32 rounded w-full py-2 px-3 text-black bg-gray-200"
                required
                aria-label="Your Message"
              ></textarea>
            </div>
            <div className="flex items-center justify-start">
              <button
                type="submit"
                onClick={sendEmail}
                className="bg-[#FFA75B] hover:text-[#FFA75B] hover:bg-white text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Send Message
              </button>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
