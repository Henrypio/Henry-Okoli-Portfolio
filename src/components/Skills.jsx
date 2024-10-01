import Footer from "./Footer";
import Header from "./Header";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Skills = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex-grow flex flex-col items-center text-white">
        <h2 className="text-3xl sm:text-4xl text-[#FFA75B] font-bold mt-8 mb-8">
          Skills
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 mb-12 lg:grid-cols-10 gap-6  mt-4 mx-4 sm:mx-8 lg:mx-20">
          {/* Skill Item */}
          <div className="flex flex-col items-center transition-transform duration-300 hover:-translate-y-2">
            <i className="fab fa-html5 text-6xl mb-2 text-[#FFA75B] "></i>
            <span className="text-lg sm:text-xl">HTML5</span>
          </div>

          <div className="flex flex-col items-center transition-transform duration-300 hover:-translate-y-2">
            <i className="fab fa-css3-alt text-6xl mb-2 text-[#FFA75B]"></i>
            <span className="text-lg sm:text-xl">CSS</span>
          </div>

          <div className="flex flex-col items-center transition-transform duration-300 hover:-translate-y-2">
            <i className="fab fa-js-square text-6xl mb-2 text-[#FFA75B]"></i>
            <span className="text-lg sm:text-xl">JavaScript</span>
          </div>

          <div className="flex flex-col items-center transition-transform duration-300 hover:-translate-y-2">
            <i className="fab fa-react text-6xl mb-2 text-[#FFA75B]"></i>
            <span className="text-lg sm:text-xl">React</span>
          </div>

          <div className="flex flex-col items-center transition-transform duration-300 hover:-translate-y-2">
            <i className="fab fa-css3-alt text-6xl mb-2 text-[#FFA75B]"></i>
            <span className="text-lg sm:text-xl">Tailwind CSS</span>
          </div>

          <div className="flex flex-col items-center transition-transform duration-300 hover:-translate-y-2">
            <i className="fab fa-react text-6xl mb-2 text-[#FFA75B]"></i>
            <span className="text-lg sm:text-xl">Next.js</span>
          </div>

          <div className="flex flex-col items-center transition-transform duration-300 hover:-translate-y-2">
            <i className="fab fa-node-js text-6xl mb-2 text-[#FFA75B]"></i>
            <span className="text-lg sm:text-xl">Node.js</span>
          </div>

          <div className="flex flex-col items-center transition-transform duration-300 hover:-translate-y-2">
            <i className="fab fa-npm text-6xl mb-2 text-[#FFA75B]"></i>
            <span className="text-lg sm:text-xl">NPM</span>
          </div>

          <div className="flex flex-col items-center transition-transform duration-300 hover:-translate-y-2">
            <i className="fas fa-server text-6xl mb-2 text-[#FFA75B]"></i>
            <span className="text-lg sm:text-xl">Express.js</span>
          </div>

          <div className="flex flex-col items-center transition-transform duration-300 hover:-translate-y-2">
            <i className="fab fa-yarn text-6xl mb-2 text-[#FFA75B]"></i>
            <span className="text-lg sm:text-xl">Yarn</span>
          </div>

          <div className="flex flex-col items-center transition-transform duration-300 hover:-translate-y-2">
            <i className="fab fa-git text-6xl mb-2 text-[#FFA75B]"></i>
            <span className="text-lg sm:text-xl">Git</span>
          </div>

          <div className="flex flex-col items-center transition-transform duration-300 hover:-translate-y-2">
            <i className="fab fa-github text-6xl mb-2 text-[#FFA75B]"></i>
            <span className="text-lg sm:text-xl">GitHub</span>
          </div>

          <div className="flex flex-col items-center transition-transform duration-300 hover:-translate-y-2">
            <i className="fas fa-database text-6xl mb-2 text-[#FFA75B]"></i>
            <span className="text-lg sm:text-xl">MongoDB</span>
          </div>

          <div className="flex flex-col items-center transition-transform duration-300 hover:-translate-y-2">
            <i className="fas fa-database text-6xl mb-2 text-[#FFA75B]"></i>
            <span className="text-lg sm:text-xl">PostgreSQL</span>
          </div>

          <div className="flex flex-col items-center transition-transform duration-300 hover:-translate-y-2">
            <i className="fas fa-database text-6xl mb-2 text-[#FFA75B]"></i>
            <span className="text-lg sm:text-xl">MySQL</span>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Skills;
