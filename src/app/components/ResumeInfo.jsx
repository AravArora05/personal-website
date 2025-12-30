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
                        [cite_start]<li className="italic">GPA: 4.0 [cite: 6]</li>
                        [cite_start]<li>Expected Graduation: May 2027 [cite: 7]</li>
                        [cite_start]<li><span className="font-semibold">Relevant Coursework:</span> Object Oriented Programming, Data Structures and Algorithms, Discrete Mathematics, Computer Organization and Programming, Objects and Design, Computer System and Networks [cite: 8]</li>
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
                    [cite_start]<p className="text-sm text-gray-600 italic">Sep 2025 – Nov 2025 [cite: 13]</p>
                    <ul className="list-disc list-inside text-base text-gray-700 mt-2 space-y-1">
                        [cite_start]<li>Leveraged AWS CDK and canary tests to automate stress testing of team's pipelines, enhancing monitoring coverage before critical Peak season. [cite: 14]</li>
                        [cite_start]<li>Created an automated onboarding workflow using internal Amazon QuickSuite tooling to provision DynamoDB tables, saving 10+ hours of manual developer effort. [cite: 15]</li>
                        [cite_start]<li>Built a proof-of-concept for a delayed shift planning tool, helping warehouse managers visualize late inbound volume. [cite: 16]</li>
                    </ul>
                </div>

                {/* HubSpot */}
                <div className="mb-6">
                    <div className="flex flex-wrap justify-between">
                        <h3 className="text-lg font-semibold text-gray-600">HubSpot - <span className="text-sm text-gray-500 italic">Software Engineering Intern</span></h3>
                        <p className="text-sm text-gray-700 italic">Boston, MA</p>
                    </div>
                    [cite_start]<p className="text-sm text-gray-600 italic">May 2025 – Aug 2025 [cite: 19]</p>
                    <ul className="list-disc list-inside text-base text-gray-700 mt-2 space-y-1">
                        [cite_start]<li>Worked on Ads Activation Paths, surfacing context-aware tips to Marketing Hub customers, boosting ad campaign activation by 40% in internal testing. [cite: 20]</li>
                        [cite_start]<li>Developed a Spring Boot microservice with Spring Data JPA and Redis caching for banners, achieving an 85% cache hit rate. [cite: 21]</li>
                        [cite_start]<li>Collaborated to integrate Google Performance Max (PMax) campaign creation, wiring new React/TypeScript flows to backend APIs. [cite: 21]</li>
                    </ul>
                </div>

                {/* Personify AI */}
                <div className="mb-6">
                    <div className="flex flex-wrap justify-between">
                        <h3 className="text-lg font-semibold text-gray-600">Personify AI - <span className="text-sm text-gray-500 italic">Software Engineering Intern</span></h3>
                        <p className="text-sm text-gray-700 italic">Atlanta, GA</p>
                    </div>
                    [cite_start]<p className="text-sm text-gray-600 italic">Jun 2024 – Aug 2024 [cite: 24]</p>
                    <ul className="list-disc list-inside text-base text-gray-700 mt-2 space-y-1">
                        [cite_start]<li>Developed and deployed RESTful APIs in Node.js to handle dynamic user data, improving database query efficiency by 30%. [cite: 25]</li>
                        [cite_start]<li>Created a fully responsive user dashboard (Next.js, Tailwind CSS + Pinecone), contributing to a 40% increase in mobile traffic. [cite: 26]</li>
                    </ul>
                </div>

                {/* Littleton Youth Soccer - Moved to Experience per resume */}
                <div className="mb-6">
                    <div className="flex flex-wrap justify-between">
                        <h3 className="text-lg font-semibold text-gray-600">Littleton Youth Soccer Club - <span className="text-sm text-gray-500 italic">Software Engineer</span></h3>
                        <p className="text-sm text-gray-700 italic">Littleton, MA</p>
                    </div>
                    [cite_start]<p className="text-sm text-gray-600 italic">May 2023 – May 2025 [cite: 29]</p>
                    <ul className="list-disc list-inside text-base text-gray-700 mt-2 space-y-1">
                        [cite_start]<li>Co-designed and developed a full-stack web application for LYSC soccer evaluators to administer tryouts, automating team generation for over 400 players. [cite: 30]</li>
                        [cite_start]<li>Reported a 92% satisfaction rate from coaches, up from 78% under the prior paper-based system. [cite: 31]</li>
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
                    [cite_start]<p className="text-sm text-gray-600 italic">Aug 2024 – Present [cite: 35]</p>
                    <ul className="list-disc list-inside text-base text-gray-700 mt-2 space-y-1">
                        [cite_start]<li>Collaborating with PhD student Jenn Redding on the Apprentice Tutors platform for the Technical College System of Georgia (TCSG). [cite: 36]</li>
                        <li>Co-author, "Generating In-Context, Personalized Feedback for Intelligent Tutors with LLMs." [cite_start]Accepted to IJAIED, 2025. [cite: 37]</li>
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
                    [cite_start]<p className="text-sm text-gray-600 italic">Aug 2024 – Present [cite: 40]</p>
                    <ul className="list-disc list-inside text-base text-gray-700 mt-2 space-y-1">
                        [cite_start]<li>Developed the frontend of FanPlay, a React Native app projected to be used by 5,000 fans at Georgia Tech football games. [cite: 41]</li>
                        [cite_start]<li>Co-led the implementation of the MVP voting feature, enabling fans to cast votes and view real-time results. [cite: 42]</li>
                    </ul>
                </div>

                {/* RolePlayer.co */}
                <div className="mb-6">
                    <div className="flex flex-wrap justify-between">
                        <h3 className="text-lg font-semibold text-gray-600">The RolePlayer.co - <span className="text-sm text-gray-500 italic">Co-Founder (MERN Stack)</span></h3>
                    </div>
                    [cite_start]<p className="text-sm text-gray-600 italic">May 2024 – Aug 2025 [cite: 43]</p>
                    <ul className="list-disc list-inside text-base text-gray-700 mt-2 space-y-1">
                        [cite_start]<li>Built a sports blog aimed at bridging the realms of finance and sports analytics. [cite: 44]</li>
                        [cite_start]<li>Developed RESTful API endpoints using Node.js/Express to facilitate communication between the frontend and the MongoDB article database. [cite: 45]</li>
                    </ul>
                </div>
            </div>

            {/* TECHNICAL SKILLS - Added from Resume */}
            <div id="skills" className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 border-b pb-2 mb-6 text-center block">Technical Knowledge</h2>
                <ul className="list-disc list-inside text-base text-gray-700 space-y-1">
                    [cite_start]<li><span className="font-semibold">Languages/Frameworks:</span> Java, Python, SQL, C++, C, JavaScript, TypeScript, NoSQL, Node.js, Angular, React, Next.js, Vite, Redux, Express, JUnit, Go, Swift, Spring [cite: 47]</li>
                    [cite_start]<li><span className="font-semibold">Developer Tools:</span> Git, AWS, Postman, Google Cloud Platform, Google Apps Script, VS Code, Eclipse, IntelliJ [cite: 48]</li>
                </ul>
            </div>

            {/* CERTIFICATIONS - Kept from old site */}
            <div id="certifications" className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 border-b pb-2 mb-6 text-center block">Certifications</h2>
                <ul className="list-disc list-inside text-base text-gray-700 space-y-1">
                    <li><a target="_blank" href="https://www.freecodecamp.org/certification/fcc1ec8fbae-322c-4baf-8dcd-bc4af792daa6/responsive-web-design" className="text-blue-500 hover:underline">Responsive Web Design Certification</a></li>
                    <li><a target="_blank" href="https://www.freecodecamp.org/certification/fcc1ec8fbae-322c-4baf-8dcd-bc4af792daa6/javascript-algorithms-and-data-structures-v8" className="text-blue-500 hover:underline">JavaScript Algorithms and Data Structures Certification</a></li>
                    <li><a target="_blank" href="https://www.freecodecamp.org/certification/fcc1ec8fbae-322c-4baf-8dcd-bc4af792daa6/front-end-development-libraries" className="text-blue-500 hover:underline">Front End Development Libraries Certification</a></li>
                    <li><a target="_blank" href="https://www.freecodecamp.org/certification/fcc1ec8fbae-322c-4baf-8dcd-bc4af792daa6/back-end-development-and-apis" className="text-blue-500 hover:underline">Back End Development and APIs Certification</a></li>
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
                        [cite_start]<li>Videographed daily football practices from various angles for coaches' breakdown and social media purposes. [cite: 49]</li>
                        <li>Aided in the set-up/breakdown of cameras across Bobby Dodd Stadium/Brock Practice Facility.</li>
                    </ul>
                </div>
                <div>
                     <div className="flex flex-wrap justify-between">
                        <h3 className="text-lg font-semibold text-gray-600">Other Activities</h3>
                    </div>
                    <ul className="list-disc list-inside text-base text-gray-700 mt-2 space-y-1">
                         [cite_start]<li>GT Data Science Club [cite: 49]</li>
                         [cite_start]<li>GOALS Soccer (Best Buddies Program) [cite: 49]</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ResumeInfo;
