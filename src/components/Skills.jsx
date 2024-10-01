import Footer from "./Footer";
import Header from "./Header";
import "@fortawesome/fontawesome-free/css/all.min.css";

const skillsData = [
  { icon: "fab fa-html5", label: "HTML5" },
  { icon: "fab fa-css3-alt", label: "CSS" },
  { icon: "fab fa-js-square", label: "JavaScript" },
  { icon: "fab fa-react", label: "React" },
  { icon: "fab fa-css3 css", label: "Tailwind CSS" }, // Corrected icon
  { icon: "fab fa-react", label: "Next.js" }, // If you want a different icon, consider changing it
  { icon: "fab fa-node-js", label: "Node.js" },
  { icon: "fab fa-npm", label: "NPM" },
  { icon: "fas fa-server", label: "Express.js" },
  { icon: "fab fa-yarn", label: "Yarn" },
  { icon: "fab fa-git", label: "Git" },
  { icon: "fab fa-github", label: "GitHub" },
  { icon: "fas fa-database", label: "MongoDB" },
  { icon: "fas fa-database", label: "PostgreSQL" },
  { icon: "fas fa-database", label: "MySQL" },
];

const SkillItem = ({ icon, label }) => (
  <div className="flex flex-col items-center transition-transform duration-300 hover:-translate-y-2">
    <i
      className={`${icon} text-6xl mb-2 text-[#FFA75B]`}
      aria-label={label}
    ></i>
    <span className="text-lg sm:text-xl">{label}</span>
  </div>
);

const Skills = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex-grow flex flex-col items-center text-white">
        <h2 className="text-3xl sm:text-4xl text-[#FFA75B] font-bold mt-8 mb-8">
          Skills
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 mb-12 lg:grid-cols-10 gap-6 mt-4 mx-4 sm:mx-8 lg:mx-20">
          {skillsData.map((skill, index) => (
            <SkillItem key={index} {...skill} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Skills;
