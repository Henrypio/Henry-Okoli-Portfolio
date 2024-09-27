import Footer from "./Footer";
import Header from "./Header";
import "@fortawesome/fontawesome-free/css/all.min.css";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <h1 className="text-4xl text-center font-bold text-[#FFA75B]">
          About Me
        </h1>
        <div className="flex justify-between ml-20 my-12">
          <div className="w-3/5">
            <p className="text-lg text-wrap text-white text-left mb-8">
              I am a driven software developer with a strong focus on building
              visually stunning and responsive web applications. I excel at
              transforming design concepts into pixel-perfect, interactive
              experiences using modern frontend technologies like React,
              Next.js, and TypeScript. My expertise extends to crafting dynamic
              user interfaces that deliver seamless user experiences. <br /> In
              addition to my frontend skills, I have a foundational
              understanding of backend technologies, enabling me to build
              fullstack applications and collaborate effectively on both ends of
              the stack. I thrive in cross-functional teams, consistently
              delivering high-impact solutions that balance aesthetics,
              performance, and functionality.
            </p>
            <a
              href="/contact"
              className="bg-[#FFA75B] text-white font-bold py-2 px-4 cursor-pointer rounded hover:text-blue-400"
            >
              Get in Touch 📩
            </a>
          </div>
          <div className="mx-24">
            <i className="fa-solid text-4xl fa-check text-[#FFA75B] mb-4 "></i>
            <span className="text-white text-lg ">
              {" "}
              90% Client Satisfaction
            </span>
            <p className="text-[#FFA75B]">
              -----------------------------------
            </p>
            <br />
            <i className="fa-solid text-4xl fa-check text-[#FFA75B] mb-4"></i>
            <span className="text-white text-lg">
              {" "}
              +3 Years Experience{" "}
            </span>{" "}
            <br />
            <p className="text-[#FFA75B]">
              -----------------------------------
            </p>
            <i className="fa-solid text-4xl fa-check text-[#FFA75B] mb-4"></i>
            <span className="text-white text-lg"> +12 Completed Projects</span>
            <p className="text-[#FFA75B]">
              -----------------------------------
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
