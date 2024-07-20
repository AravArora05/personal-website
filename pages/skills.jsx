// src/pages/index.js
import Link from "next/link";
import '../src/app/globals.css';
import Home from "@/app/components/Home";
import HomePage from ".";
import AboutMe from "@/app/components/AboutMe";
import ContactMe from "@/app/components/ContactMe";
import UpdatedSkills from "@/app/components/UpdatedSkills";


const Skills = () => {
  return (
   
     <UpdatedSkills/>
  );
};

export default Skills;