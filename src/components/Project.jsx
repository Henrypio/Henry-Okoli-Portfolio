import React from "react";
import ProjectCard from "../components/ProjectCard";
import Header from "../components/Header";
import Footer from "../components/Footer";

const projects = [
  {
    title: "E-Commerce App",
    description:
      "A full-featured e-commerce platform built with React, Firebase, and Tailwind CSS.",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    link: "https://ecommerce-app-henna-eta.vercel.app",
  },
  {
    title: "Todo Custom API-app",
    description:
      "A simple and efficient todo list application using Next.js and custom API routes.",
    technologies: ["Next.js", "Tailwind CSS", "Redux"],
    link: "https://todo-custom-api-app.vercel.app",
  },
  {
    title: "Farmlink",
    description:
      "This project was developed through collaboration among multiple teams, including UI/UX, frontend, mobile, and backend developers, who came together to bring this idea to life.",
    technologies: ["React", "Tailwind", "Redux", "CSS"],
    link: "https://farmlink-fe-int.vercel.app/",
  },
  {
    title: "User Dashboard With User Authentication",
    description:
      "User dashboard with firebase authentication for signup and login process,on successful login the app routes to the dashboard screen.",
    technologies: ["React", "Tailwind CSS", "Firebase Authentication"],
    link: "https://dashboard-user-auth.vercel.app/",
  },
  {
    title: "Todo List App using API",
    description:
      "A todo app that allows user to add new todos to the list, mark todos as complete, delete todos from the list, strike out completed todos and toggle light and dark…",
    technologies: ["Next.js", "Tailwind CSS", "API Routes"],
    link: "https://todo-application-blue-three.vercel.app/",
  },
  {
    title: "LANDING PAGE DESIGN",
    description:
      "Use React Router to connect the three screens so that when the corresponding buttons are clicked, it should take us to the corresponding screen. Main, Gallery and Certificate are the screens",
    technologies: ["React", "React Router", "styled component"],
    link: "https://landing-page-design-livid.vercel.app/",
  },
  {
    title: "Country API Country",
    description:
      "Using an API to get various details of countries and display them.",
    technologies: ["Javascript", "CSS", "HTML"],
    link: "https://country-api-display-5oxh.vercel.app/",
  },
];

const Project = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto  p-4">
        <h1 className="text-4xl font-bold text-center text-[#FFA75B] mb-4">
          Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-15 md:mx-20 lg:mx-20">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Project;
