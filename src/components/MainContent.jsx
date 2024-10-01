import Footer from "./Footer";
import Header from "./Header";
import softwareimage from "../assets/software-image.png";

export const MainContent = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex justify-center text-white items-center px-4 sm:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row text-center lg:text-left items-center justify-between w-full">
          <div className="lg:w-1/2 my-12 lg:my-0">
            <p className="text-lg mt-2">Hi👋, I’m a </p>
            <p className="text-2xl lg:text-3xl font-bold mt-2 text-[#FFA75B]">
              Software Developer
            </p>
            <p className="text-md lg:text-lg mt-2 mb-6 lg:mb-12">
              I’m <span className="text-lg font-bold">Henry Okoli</span>, a
              developer dedicated to making the world a
              <br />
              better place one line of code at a time.
            </p>
            <a
              href="/HENRY-OKOLI-Resume.pdf" 
              download="HENRY-OKOLI.pdf"
              aria-label="Download Henry Okoli's CV"
              className="bg-[#FFA75B] text-white font-bold py-2 px-6 rounded hover:text-blue-400"
            >
              Download My CV 📄
            </a>
          </div>

          <img
            src={softwareimage}
            alt="A portrait of a software developer."
            className="w-full sm:w-4/6 lg:w-2/5 mt-8 lg:mt-0 lg:ml-12 transition-transform duration-300 hover:-translate-y-2 rounded-xl object-cover"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};
