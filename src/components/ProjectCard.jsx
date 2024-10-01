import React from "react";

const ProjectCard = ({ title, description, technologies, link }) => {
  return (
    <div className="bg-black border mt-2 shadow-md rounded-xl p-6 hover:shadow-xl transition-shadow transform hover:scale-105">
      <h2 className="text-2xl text-[#FFA75B] font-semibold mb-2">{title}</h2>
      <p className="text-white mb-4">{description}</p>
      <ul className="mb-4">
        {technologies.map((tech, index) => (
          <li
            key={index} // Ideally use a unique identifier for better performance
            className="inline-block bg-[#FFA75B] text-white text-sm px-2 py-1 rounded-full mr-2 mb-2"
          >
            {tech}
          </li>
        ))}
      </ul>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View project: ${title}`} // Adding an accessible label
        className="text-white hover:underline hover:text-[#FFA75B]"
      >
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
