import Footer from "./Footer";
import Header from "./Header";
import softwareimage from "../assets/software-image.png";

export const MainContent = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow flex justify-center text-white items-center">
        <div className="flex text-center">
          <div className="text-left ml-20 my-12">
            <p className="text-lg mt-2">Hi👋, I’m a </p>
            <p className="text-xl font-bold mt-2 text-[#FFA75B]">
              Software Developer
            </p>
            <p className="text-lg mt-2 mb-12">
              I’m Henry Okoli, a developer dedicated to making the world a{" "}
              <br />
              better place one line of code at a time.
            </p>
            <a
              href="../public/HENRY-OKOLI.pdf"
              download="HENRY-OKOLI.pdf"
              className="bg-[#FFA75B] text-white font-bold py-2 px-4 cursor-pointer rounded hover:text-blue-400"
            >
              Download My CV 📄
            </a>
          </div>
          <img
            src={softwareimage}
            alt="Henry Okoli"
            className="w-3/6 mb-4 mx-auto transition-transform duration-300 hover:-translate-y-2 rounded-xl"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};
