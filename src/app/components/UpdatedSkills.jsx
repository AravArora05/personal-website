import React, { useState } from "react";
import Link from "next/link";

const skillsData = [
    {
        "category": "Programming Languages",
        "skills": [
            {
                "name": "JavaScript",
                "score": 4,
                "description": "JavaScript has grown to be my favorite language over the past year! I've been using JavaScript for full stack web development and have explored many of its libraries and frameworks. I'll go into more detail about the frameworks/libraries in other sections.",
                "projects": [
                    { "name": "FreeCodeCamp JavaScript Projects", "link": "https://github.com/AravArora05/JavaScriptFCCProjects" },
                    { "name": "Soccer Eval Project", "link": "https://github.com/WillPalaia/LYSA-Eval-Framework" },
                    { "name": "Calorie Counter Mini Project (modified from FCC work)", "link": "https://github.com/AravArora05/CalorieCounterMiniProject" }
                ]
            },
            {
                "name": "C++",
                "score": 4,
                "description": "I started diving deeper into C++ following my internship at Amazon! It's been a really cool learning opportunity to understand manual memory management and low-level system architecture.",
                "projects": [
                    { "name": "Task Manager", "link": "https://github.com/AravArora05/task-manager-cpp" },
                    { "name": "CPP Learning Journey", "link": "https://github.com/AravArora05/cpp-learning-journey" }
                ]
            },
            {
                "name": "Java",
                "score": 5,
                "description": "Java is the first programming language I learned during COVID! It's a great first language for learning fundamental concepts such as OOP, polymorphism, and encapsulation. I love using it for projects and assignments involving data structures and algorithms. I mostly teach Java at KTBYTE. In the next couple of months, I hope to learn the Spring and Hibernate(frameworks).",
                "projects": [
                    { "name": "KTBYTE Curriculum", "link": "https://www.ktbyte.com/classes#group56" }
                ]
            },
            {
                "name": "Python",
                "score": 3,
                "description": "Similar to JavaScript, I've really grown to enjoy Python over the past year! I enjoy its simple syntax and typically use it for LeetCode practice. In the past couple of months, I've mainly been using Python for web scraping! Some Python libraries I've enjoyed playing around with  are BeautifulSoup, MatPlotLib, and PyTorch.",
                "projects": [
                    { "name": "Web Scraping US News API", "link": "https://github.com/AravArora05/college-frontend/blob/main/main.py" },
                    { "name": "Optimizing a Pre-Trained BERT Model", "link": "https://github.com/WillPalaia/LYSA-Eval-Framework/tree/main/python" }
                ]
            }
        ]
    },


    {

        "category": "Frontend",
        "skills": [
            {
                "name": "HTML & CSS",
                "score": 4,
                "description": "I first started learning HTML and CSS at the start of my Spring semester! I primarily learned the concepts through YouTube and the FreeCodeCamp curriculum. It was great for understanding the basics, and now I really enjoy front-end web development! It's great to be able to turn FIGMA designs into real, aesthetically-pleasing websites!",
                "projects": [
                    { "name": "FCC Responsive Web Design Projects", "link": "https://www.freecodecamp.org/certification/fcc1ec8fbae-322c-4baf-8dcd-bc4af792daa6/responsive-web-design" },
                    { "name": "Celtics Season Ticket Holder MP", "link": "https://github.com/AravArora05/CelticsSznTicketsFCC" },
                    { "name": "First Ever HTML/CSS Project", "link": "https://github.com/AravArora05/BitsOfGoodProject" }
                ]
            },
            {
                "name": "Tailwind CSS",
                "score": 4,
                "description": "Tailwind CSS has been a great addition to my web development toolkit! I've designed most of this website with Tailwind CSS, and I also utilized it for most of the College Admissions website as well.",
                "projects": [
                    { "name": "Personal Website Source Code", "link": "https://github.com/AravArora05/personal-website" },
                    { "name": "College Website Frontend", "link": "https://github.com/AravArora05/college-frontend" }
                ]
            },
            {
                "name": "Next.js",
                "score": 4,
                "description": "I've really enjoyed working with Next.js, especially its Static Site Generation (SSG) capabilities. SSG has allowed me to create TheRolePlayer.Co with incredible SEO performance.",
                "projects": [
                    { "name": "TheRolePlayer.Co (Next Version)", "link": "https://github.com/AravArora05/trp_next" },
                    { "name": "College Website", "link": "https://github.com/AravArora05/college-frontend" }
                ]
            },
            {
                "name": "React",
                "score": 3,
                "description": "I first learned about React in the FCC Front End Development Libraries course. I found it very interesting, and components seemed like a great way to simplify the process of coding. Furthermore, I even used React for the first edition of TheRolePlayer. However, I prefer the flexibility of Static Site Generation (SSG) and Server-Side Rendering (SSR) in Next.js a bit more.",
                "projects": [
                    { "name": "TheRolePlayer.Co (React Version)", "link": "https://github.com/AravArora05/TheRolePlayer.co" },
                    { "name": "React Markdown Project", "link": "https://github.com/AravArora05/ReactMarkdownProject" }
                ]
            },
            {
                "name": "Bootstrap",
                "score": 3,
                "description": "The FCC curriculum covers Bootstrap, and I really enjoyed learning about it. However, I prefer to use Tailwind, since it makes more intuitive sense to me!",
                "projects": [
                    { "name": "Palindrome Checker Project FCC", "link": "https://github.com/AravArora05/JavaScriptFCCProjects/tree/main/Palindrome%20Checker" },
                    { "name": "Random Quote Generator", "link": "https://github.com/AravArora05/RandomQuoteGenerator" }
                ]
            },
            {
                "name": "jQuery",
                "score": 2.5,
                "description": "Like other concepts, I originally learned jQuery as part of the FCC curriculum! I thought the syntax was fairly simple to learn, and it really simplified the process of writing clean JavaScript code.!",
                "projects": [
                    { "name": "jQuery Calculator", "link": "https://codepen.io/AravArora05/pen/bGyWMpR" },
                    { "name": "React Markdown Previewer (with jQuery)", "link": "https://codepen.io/AravArora05/pen/eYaWZYY" }
                ]
            },
            {
                "name": "Vue.js",
                "score": 1.5,
                "description": "I've watched the FCC course on Vue.js, but I haven't built anything major with it. There are some cool things such as v-model that I found interesting from tutorials",
                "projects": []
            }
        ]
    },

    {
        category: "Backend",
        skills: [
            {
                name: "Node.js/Express",
                score: 4,
                description: "I've combined these two, for  I use them together! For one, I enjoy Node.js because of its massive ecosystem of libraries through npm. From multer to mongoose to Moment.js (I believe kind of going out of use), I've had many uses for different Node.js libraries! At first, I found Node.js/Express rather difficult, but once I started to understand important concepts, understanding backend development became much easier. Since I enjoy JavaScript so much, it was bound to be that I'd enjoy Node.js. :) Express was also helpful. It was great to learn about middleware and how it simplifies the different CRUD Operations. In all, I also enjoy the simplicity of the MERN stack, one of my favorites for full stack web development",
                projects: [
                    { name: "LYSC Backend", link: "https://github.com/WillPalaia/LYSA-Eval-Framework/tree/main/backend" },
                    { name: "File Metadata Service FCC", link: "https://github.com/AravArora05/RequestHeaderParserMicroserviceFCC" },
                ]
            },
            {
                name: "Go",
                score: 2,
                description: "For the most part, I've been using Node.js and Express for the backend of most of my full stack projects. However, I'm starting to learn a bit more of GO recently! To practice, I plan to build a backend server using Go in a future project(Note: May utilise Go to create a new backend server to keep/store articles for TheRolePlayer.Co)",
                projects: [
                    { name: "All FCC Backend Development and API's Projects", link: "https://www.freecodecamp.org/certification/fcc1ec8fbae-322c-4baf-8dcd-bc4af792daa6/back-end-development-and-apis" },

                ]
            },

            {
                name: "AWS EC2",
                score: 3,
                description: "For the LYSC Soccer Evaluation Project, I deployed my backend on an AWS EC2 server. Learning how to deploy the backend on AWS EC2 using the terminal was a bit confusing at first, but I understand it well now! ",
                projects: [

                ]
            }
        ]
    },
    {
        category: "Databases",
        skills: [
            {
                name: "MongoDB",
                score: 4,
                description: "Similar to most concepts from this list, I learned about MongoDB from the FCC Backend Development and Libraries course. I'm fine with using either SQL or non-SQL databases, but I've mostly employed the MERN stack for most full stack website projects",
                projects: [
                    { name: "Exercise Tracker FCC", link: "https://github.com/AravArora05/ExerciseLoggerFCC" },
                ]
            },
            {
                name: "MySQL",
                score: 3,
                description: "I actually first learned mySQL during my last semester of high school!  I have only used MySQL for a couple assignments, thus I'll attempt to utilise it in the future project where I build a backend server with Go!",
                projects: [

                ]
            },
            {
                name: "Pinecone",
                score: 3,
                description: "I utilised a Pinecone database for the College Project! ",
                projects: [

                ]
            },


        ]
    }
];

export default function UpdatedSkills() {
    const [selectedSkill, setSelectedSkill] = useState(null);

    const toggleSkill = (categoryIndex, skillIndex) => {
        const index = `${categoryIndex}-${skillIndex}`;
        if (selectedSkill === index) {
            setSelectedSkill(null);
            return;
        }
        setSelectedSkill(index);
    };

    return (
        <>
            <h3 className="text-2xl font-bold text-center mb-4 text-black">SKILLS</h3>
            <p className="text-gray-700 mb-6">
                Honestly, I think this section may be a bit unnecessary. As programmers, we continuously must learn and adapt to new languages, syntax, and technologies every day. This ongoing learning process means that our skill set is always evolving. Additionally, we may occasionally forget certain syntax/concepts over time. I honestly created this section to practice simplifying important technical concepts.
            </p>
            <p className="font-semibold text-gray-700 mb-4">
                On this page, the score out of five represents my current level of familiarity and proficiency with the language/framework/library.
            </p>

            {skillsData.map((category, i) => (
                <div key={i}>
                    <h2 className="font-bold text-xl text-left mt-6 text-black">{category.category}</h2>
                    <hr className="border-gray-300 mb-4" />
                    {category.skills.map((skill, j) => (
                        <div key={j} className="cursor-pointer item mb-3 w-full mx-auto">
                            <div onClick={() => toggleSkill(i, j)} className={`title flex justify-between items-center bg-gray-200 hover:bg-blue-100 p-4 rounded shadow transition-colors duration-200 ${selectedSkill === `${i}-${j}` ? "bg-blue-100" : "bg-gray-200"}`}>
                                <h2 className="text-lg font-semibold text-black">{skill.name} - {skill.score}/5</h2>
                                <span className="text-lg text-black">{selectedSkill === `${i}-${j}` ? "-" : "+"}</span>
                            </div>
                            <div className={selectedSkill === `${i}-${j}` ? "block bg-gray-100 p-4 rounded-b shadow-inner" : "hidden"}>
                                <p className="text-md mb-2 text-black">{skill.description}</p>
                                <p className="text-md font-bold text-black">Projects:</p>
                                <ul>
                                    {skill.projects.map((project, k) => (
                                        <li key={k} className="text-md">
                                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                                {project.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </>
    );
}
