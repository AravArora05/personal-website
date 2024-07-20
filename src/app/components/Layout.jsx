"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import "../globals.css";
import DropdownButton from "./DropdownButton";
import { useRouter } from 'next/router';



const Layout = ({ children }) => {
  const navItems = [
    { name: "ABOUT", link: "/about" },
    { name: "RESUME", link: "/resume" },
    { name: "PROJECTS", link: "/projects" },
    { name: "SKILLS", link: "/skills" },
    { name: "CONTACT", link: "/contact" },
  ];

  const router = useRouter();
  const isHomePage = router.pathname === '/';


  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);



  return (
    <main className="flex min-h-screen flex-col bg-blue-50">
      <header className="flex items-center justify-between bg-white py-2 px-4 border-b border-gray-200 lg:py-2.5">
        <h1 className="text-black text-lg lg:text-xl font-semibold tracking-wide">
          <Link href="/">Arav Arora</Link>
        </h1>
        <nav className="flex text-center">
          {isMobile ? (
            <DropdownButton title="Menu" data={navItems} />
          ) : (
            navItems.map((item, index) => (
              <Link href={item.link} key={index}>
                <span className="text-gray-700 text-xs lg:text-sm uppercase font-medium cursor-pointer hover:text-black px-2 lg:px-4">
                  {item.name}
                </span>
              </Link>
            ))
          )}
        </nav>
      </header>

      <div className={`max-w-7xl mx-auto p-8 mt-6 flex ${isHomePage ? "flex-col" : "flex-col-reverse"} md:flex-row`}>
        <div className="w-full md:w-1/3 pr-8 mb-8 md:mb-0">
          <Image
            className="rounded-full mb-6 border-4 border-blue-200"
            src="/arav.jpeg"
            alt="Arav Arora"
            width={200}
            height={200}
          />
          <h2 className="text-3xl font-bold text-black mb-2">ARAV ARORA</h2>
          <Link href="mailto:aravarora05@gmail.com">
            <p className="text-gray-600 mb-2 cursor-pointer">ARAVARORA05@GMAIL.COM</p>
          </Link>
          <div className="flex space-x-4 mb-4">
            <Link target="_blank" href="https://github.com/AravArora05">
              <span className="hover:text-gray-800 transition duration-300">
                <FontAwesomeIcon icon={faGithub} size="lg" style={{ color: "#333" }} />
              </span>
            </Link>
            <Link target="_blank" href="https://www.linkedin.com/in/arav-arora-5b5b1228b/">
              <span className="hover:text-gray-800 transition duration-300">
                <FontAwesomeIcon icon={faLinkedin} size="lg" style={{ color: "#0077b5" }} />
              </span>
            </Link>
            <Link target="_blank" href="https://www.freecodecamp.org/fcc1ec8fbae-322c-4baf-8dcd-bc4af792daa6">
              <span className="hover:text-gray-800 transition duration-300">
                <FontAwesomeIcon icon={faFreeCodeCamp} size="lg" style={{ color: "#006400" }} />
              </span>
            </Link>
          </div>

          <hr className="my-4" />
          <section>
            <h3 className="text-xl font-bold mb-4 text-black">ABOUT</h3>
            <p className="text-gray-700 mb-6">
              Hello! I'm Arav, a second-year Computer Science student at Georgia Tech, set to graduate in December 2026. I really enjoy working with the MERN stack for full-stack web development. Currently, I'm expanding my knowledge in ML and AI. I'm eager to tackle new challenges and apply my skills to innovative projects in the ever-changing tech industry.
            </p>
            <Link href="/about">
              <button className="border-2 border-black text-black px-6 py-2 font-semibold hover:bg-blue-100 transition duration-300">
                ABOUT ME
              </button>
            </Link>
          </section>
        </div>

        <div className="w-full md:w-2/3 pl-0 mb-6 md:pl-8 border-l md:border-l border-gray-300">
          <div className="w-full bg-white rounded-md px-7 py-6">{children}</div>
        </div>
      </div>
    </main>
  );
};

export default Layout;
