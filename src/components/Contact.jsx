import React, { useRef } from "react";
import emailjs from "emailjs-com";
import Footer from "./Footer";
import Header from "./Header";

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
          alert("Failed to send the message, please try again.");
        }
      );
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <h2 className="text-4xl text-[#FFA75B] font-bold text-center">
        Contacts
      </h2>
      <main className="flex-grow flex items-center justify-center">
        <div>
          <p className="text-white text-2xl text-start mx-36">
            If you have any questions, need help, or just want to say hi, please
            don't hesitate to reach out.
          </p>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-black shadow-lg rounded-lg p-8 max-w-lg w-full mr-12"
        >
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
              className="shadow border border-[#FFA75B] rounded w-full py-2 px-3 text-black bg-gray-200"
              required
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
              className="shadow border border-[#FFA75B] rounded w-full py-2 px-3 text-black bg-gray-200"
              required
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
              className="shadow border border-[#FFA75B] rounded w-full py-2 px-3 text-black bg-gray-200"
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-start">
            <button
              type="submit"
              className="bg-[#FFA75B] hover:text-[#FFA75B] hover:bg-white text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send Message
            </button>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
