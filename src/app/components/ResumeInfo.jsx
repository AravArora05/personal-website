import React from 'react';

const ResumeInfo = () => {
    return (
        <div className="container mx-auto">
            <h3 className="text-2xl font-bold text-center mb-4 text-black">RESUME</h3>
            <p className="text-gray-800 mb-1">
                This page offers an alternative format of my resume. Most of the information is similar to my PDF version. If you'd prefer to view the PDF, you can click 
                <a href="/AravAroraResume.pdf" target="_blank" className="text-blue-500 hover:underline"> here</a>.
            </p>
            <hr className="mb-4"></hr>

            {/* Navigation Links */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:flex lg:flex-row lg:flex-wrap justify-between mb-4 space-x-2 gap-y-2 sm:gap-y-2 text-center">
                <a href="#education" className="text-gray-800 hover:text-blue-500">Education</a>
                <a href="#experience" className="text-gray-800 hover:text-blue-500">Experience</a>
                <a href="#research" className="text-gray-800 hover:text-blue-500">Research</a>
                <a href="#projects" className="text-gray-800 hover:text-blue-500">Projects</a>
                <a href="#skills" className="text-gray-800 hover:text-blue-500">Skills</a>
                <a href="#certifications" className="text-gray-800 hover:text-blue-500">Certifications</a>
                <a href="#other" className="text-gray-800 hover:text-blue-500">Extracurriculars</a>
            </div>

            <br></br>

            {/* EDUCATION */}
            <div id="education" className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 border-b pb-2 mb-6 text-center block">Education</h2>
                <div className="mb-6">
                    <div className="flex flex-wrap justify-between">
                        <h3 className="text-lg font-bold text-gray-800">Georgia Institute of Technology</h3>
                        <p className="text-sm text-gray-700 italic">Atlanta, GA</p>
                    </div>
                    <ul className="list-disc list-inside text-base text-gray-600 space-y-1">
                        <li>B.S. in Computer Science (Threads in Intelligence + Sys/Arch)</li>
                        <li className="italic">GPA: 4.0</li>
                        <li>Expected Graduation: May 2027</li>
                        <li><span className="font-semibold">Relevant Coursework:</span> Object Oriented Programming, Data Structures & Algorithms, Discrete Math, Computer Organization, Systems & Networks.</li>
                    </ul>
                </div>
            </div>

            {/* EXPERIENCE */}
            <div id="experience" className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 border-b pb-2 mb-6 text-center block">Experience</h2>

                {/* Amazon */}
                <div className="mb-6">
                    <div className="flex flex-wrap justify-between">
                        <h3 className="text-lg font-semibold text-gray-600">Amazon - <span className="text-sm text-gray-500 italic">Software Development Engineering Intern</span></h3>
                        <p className="text-sm text-gray-700 italic">Seattle, WA</p>
                    </div>
                    <p className="text-sm text-gray-600 italic">Sep 2025 – Nov 2025</p>
                    <ul className="list-disc list-inside text-base text-gray-700 mt-2 space-y-1">
                        <li>Automated critical stress testing for team pipelines using AWS CDK and canary tests, ensuring system stability before the high-traffic Peak season.</li>
                        <li>Replaced a manual database provisioning process with an automated onboarding workflow (via Amazon QuickSuite), saving developers over 10 hours of setup time per project.</li>
                        <li>Designed a proof-of-concept tool for warehouse managers to visualize delayed shift planning and manage late inbound volume more effectively.</li>
                    </ul>
                </div>

                {/* HubSpot */}
                <div className="mb-6">
                    <div className="flex flex-wrap justify-between">
                        <h3 className="text-lg font-semibold text-gray-600">HubSpot - <span className="text-sm text-gray-500 italic">Software Engineering Intern</span></h3>
                        <p className="text-sm text-gray-700 italic">Boston, MA</p>
                    </div>
                    <p className="text-sm text-gray-600 italic">May 2025 – Aug 2025</p>
                    <ul className="list-disc list-inside text-base text-gray-700 mt-2 space-y-1">
                        <li>Engineered "Ads Activation Paths," a feature that surfaces context-aware tips to users; this led to a 40% boost in ad campaign activations during internal testing.</li>
                        <li>Built a high-performance Spring Boot microservice to handle banner data, utilizing Redis caching to achieve an 85% cache hit rate.</li>
                        <li>Collaborated with product teams to integrate Google Performance Max (PMax) campaigns, wiring up complex React/TypeScript frontend flows to backend APIs.</li>
                    </ul>
                </div>

                {/* Personify AI */}
                <div className="mb-6">
                    <div className="flex flex-wrap justify-between">
                        <h3 className="text-lg font-semibold text-gray-600">Personify AI - <span className="text-sm text-gray-500 italic">Software Engineering Intern</span></h3>
                        <p className="text-sm text-gray-700 italic">Atlanta, GA</p>
                    </div>
                    <p className="text-sm text-gray-600 italic">Jun 2024 – Aug 2024</p>
                    <ul className="list-disc list-inside text-base text-gray-700 mt-2 space-y-1">
                        <li>Optimized database efficiency by 30% by developing specialized RESTful APIs in Node.js to handle dynamic user data.</li>
                        <li>Built a fully responsive user dashboard using Next.js and Tailwind CSS (with Pinecone vector search), which helped drive a 40% increase in mobile traffic.</li>
                    </ul>
                </div>

                {/* Littleton Youth Soccer */}
                <div className="mb-6">
                    <div className="flex flex-wrap justify-between">
                        <h3 className="text-lg font-semibold text-gray-600">Littleton Youth Soccer Club - <span className="text-sm text-gray-500 italic">Software Engineer</span></h3>
                        <p className="text-sm text-gray-700 italic">Littleton, MA</p>
                    </div>
                    <p className="text-sm text-gray-600 italic">May 2023 – May 2025</p>
                    <ul className="list-disc list-inside text-base text-gray-700 mt-2 space-y-1">
                        <li>Co-designed a full-stack web app to modernize soccer tryouts, automating the complex team generation process for over 400 players.</li>
                        <li>The new system was a hit with coaches, raising their reported satisfaction rate to 92% (up from 78% with the old paper system).</li>
                    </ul>
                </div>
            </div>

            {/* RESEARCH */}
            <div id="research" className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 border-b pb-2 mb-6 text-center block">Research</h2>
                <div className="mb-6">
                    <div className="flex flex-wrap justify-between">
                        <h3 className="text-lg font-semibold text-gray-600">TEACHABLE AI Lab - <span className="text-sm text-gray-500 italic">Research Intern (ALOE-AI)</span></h3>
                        <p className="text-sm text-gray-700 italic">Atlanta, GA</p>
                    </div>
                    <p className="text-sm text-gray-600 italic">Aug 2024 – Present</p>
                    <ul className="list-disc list-inside text-base text-gray-700 mt-2 space-y-1">
                        <li>Partnering with PhD researchers to build the "Apprentice Tutors" platform, supporting nurse training across the Technical College System of Georgia (TCSG).</li>
                        <li>Co-authored the paper "Generating In-Context, Personalized Feedback for Intelligent Tutors with LLMs," accepted to IJAIED 2025.</li>
                    </ul>
                </div>
            </div>

            {/* PROJECTS */}
            <div id="projects" className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 border-b pb-2 mb-6 text-center block">Projects</h2>
                
                {/* FanPlay */}
                <div className="mb-6">
                    <div className="flex flex-wrap justify-between">
                        <h3 className="text-lg font-semibold text-gray-600">FanPlay - <span className="text-sm text-gray-500 italic">Frontend Developer</span></h3>
                    </div>
                    <p className="text-sm text-gray-600 italic">Aug 2024 – Present</p>
                    <ul className="list-disc list-inside text-base text-gray-700 mt-2 space-y-1">
                        <li>Lead Frontend Developer for a React Native app designed for 5,000+ fans at Georgia Tech football games.</li>
                        <li>Co-led the MVP voting feature, building the interface that allows fans to cast live votes and see real-time game results.</li>
                    </ul>
                </div>

                {/* RolePlayer.co */}
                <div className="mb-6">
                    <div className="flex flex-wrap justify-between">
                        <h3 className="text-lg font-semibold text-gray-600">The RolePlayer.co - <span className="text-sm text-gray-500 italic">Co-Founder (MERN Stack)</span></h3>
                    </div>
                    <p className="text-sm text-gray-600 italic">May 2024 – Aug 2025</p>
                    <ul className="list-disc list-inside text-base text-gray-700 mt-2 space-y-1">
                        <li>Created a sports blog platform that blends finance concepts with sports analytics.</li>
                        <li>Architected the RESTful API with Node.js and Express to manage article data and connect the frontend to our MongoDB database.</li>
                    </ul>
                </div>
            </div>

            {/* TECHNICAL SKILLS */}
            <div id="skills" className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 border-b pb-2 mb-6 text-center block">Technical Knowledge</h2>
                <ul className="list-disc list-inside text-base text-gray-700 space-y-1">
                    <li><span className="font-semibold">Languages & Frameworks:</span> Java, Python, C++, JavaScript/TypeScript, SQL, NoSQL, Node.js, React, Next.js, Spring Boot, Go, Swift.</li>
                    <li><span className="font-semibold">Developer Tools:</span> AWS, Git, Postman, Google Cloud Platform, VS Code, IntelliJ.</li>
                </ul>
            </div>

            {/* CERTIFICATIONS */}
            <div id="certifications" className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 border-b pb-2 mb-6 text-center block">Certifications</h2>
                <ul className="list-disc list-inside text-base text-gray-700 space-y-1">
                    <li><a target="_blank" href="https://www.freecodecamp.org/certification/fcc1ec8fbae-322c-4baf-8dcd-bc4af792daa6/responsive-web-design" className="text-blue-500 hover:underline">Responsive Web Design</a></li>
                    <li><a target="_blank" href="https://www.freecodecamp.org/certification/fcc1ec8fbae-322c-4baf-8dcd-bc4af792daa6/javascript-algorithms-and-data-structures-v8" className="text-blue-500 hover:underline">JavaScript Algorithms and Data Structures</a></li>
                    <li><a target="_blank" href="https://www.freecodecamp.org/certification/fcc1ec8fbae-322c-4baf-8dcd-bc4af792daa6/front-end-development-libraries" className="text-blue-500 hover:underline">Front End Development Libraries</a></li>
                    <li><a target="_blank" href="https://www.freecodecamp.org/certification/fcc1ec8fbae-322c-4baf-8dcd-bc4af792daa6/back-end-development-and-apis" className="text-blue-500 hover:underline">Back End Development and APIs</a></li>
                </ul>
            </div>

            {/* EXTRACURRICULARS */}
            <div id="other" className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 border-b pb-2 mb-6 text-center block">Extracurriculars</h2>
                <div className="mb-6">
                    <div className="flex flex-wrap justify-between">
                        <h3 className="text-lg font-semibold text-gray-600">Georgia Tech Football Team - <span className="text-sm text-gray-500 italic">Student Videographer</span></h3>
                    </div>
                    <p className="text-sm text-gray-600 italic">August 2023 - Present</p>
                    <ul className="list-disc list-inside text-base text-gray-700 mt-2 space-y-1">
                        <li>Capture daily practice footage from multiple angles (Endzone, Sideline) for coaches' technical breakdown and social media content.</li>
                        <li>Assist with the logistics and setup of camera equipment across Bobby Dodd Stadium and the practice facilities.</li>
                    </ul>
                </div>
                <div>
                     <div className="flex flex-wrap justify-between">
                        <h3 className="text-lg font-semibold text-gray-600">Other Activities</h3>
                    </div>
                    <ul className="list-disc list-inside text-base text-gray-700 mt-2 space-y-1">
                         <li>GT Data Science Club</li>
                         <li>GOALS Soccer (Best Buddies Program)</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ResumeInfo;
