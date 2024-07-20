const ResumeInfo = () => {
    return (
        <div className="container mx-auto">
            <h3 className="text-2xl font-bold text-center mb-4 text-black">RESUME</h3>
<p className="text-gray-800 mb-1">This page offers an alternative format of my resume. Most of the information is similar to my PDF version. If you'd prefer to view the PDF, you can click 
    <a href="/AravAroraResume.pdf" target="_blank" className="text-blue-500 hover:underline"> here</a>.
   
</p>
<hr className="mb-4"></hr>

            <div className="flex flex-wrap justify-between mb-4 space-x-2 sm:space-x-4 text-center">
                <a href="#education" className="text-gray-800 hover:text-blue-500">Education</a>
                <a href="#experience" className="text-gray-800 hover:text-blue-500">Experience</a>
                <a href="#certifications" className="text-gray-800 hover:text-blue-500">Certifications</a>
                <a href="#courses" className="text-gray-800 hover:text-blue-500">Courses</a>
                <a href="#transcript" className="text-gray-800 hover:text-blue-500">Transcript</a>
                <a href="#other" className="text-gray-800 hover:text-blue-500">Volunteering/Other</a>
            </div>

<br></br>
        

            <div id="education" className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 border-b pb-2 mb-6 text-center block">Education</h2>
                <div className="mb-6">
                    <div className="flex flex-wrap justify-between">
                        <h3 className="text-lg font-bold text-gray-800">Georgia Institute of Technology</h3>
                        <p className="text-sm text-gray-700 italic">Atlanta, GA</p>
                    </div>
                    <ul className="list-disc list-inside text-base text-gray-600 space-y-1">
                        <li>B.S. in Computer Science (Threads in Intelligence + Sys/Arch)</li>
                        <li className="italic">GPA: 4.0, Faculty Honors</li>
                        <li>Expected Graduation: Dec. 2026</li>
                    </ul>
                </div>
                <div>
                    <div className="flex flex-wrap justify-between">
                        <h3 className="text-lg font-bold text-gray-800">Littleton High School</h3>
                        <p className="text-sm text-gray-700 italic">Littleton, MA</p>
                    </div>
                    <p className="text-sm text-gray-600 italic">Aug. 2019 - May. 2023</p>
                </div>
            </div>

            <div id="experience" className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 border-b pb-2 mb-6 text-center block">CS-Related Work Experience</h2>
                <div className="mb-6">
                    <div className="flex flex-wrap justify-between">
                        <h3 className="text-lg font-semibold text-gray-600">KTBYTE Computer Academy - <span className="text-sm text-gray-500 italic">Tutor + Teacher Assistant</span></h3>
                    </div>
                    <p className="text-sm text-gray-600 italic">Dec 2021 - Present</p>
                    <ul className="list-disc list-inside text-base text-gray-700 mt-2 space-y-1">
                        <li>Taught a year-long course focusing on the fundamentals of Object-Oriented Programming and APCS exam preparation</li>
                        <li>Created and graded problem sets using practice questions from prior AP exams and KTBYTE question bank</li>
                        <li>Introduced students to game development using Lua(Spring 2023), helping them build programs for Roblox</li>
                        <li>Summer 2024 - TA for Upper/Advanced Java classes revolving around fundamental DSA concepts</li>
                    </ul>
                </div>
                <div>
                    <div className="flex flex-wrap justify-between">
                        <h3 className="text-lg font-semibold text-gray-600">Camp Tahattawan - <span className="text-sm text-gray-500 italic">Technology Lead</span></h3>
                    </div>
                    <p className="text-sm text-gray-600 italic">Summers 2021 - 2023</p>
                    <ul className="list-disc list-inside text-base text-gray-700 mt-2 space-y-1">
                        <li>Planned and implemented engaging and educational STEM activities for over 200+ campers in grades K-6</li>
                        <li>Facilitated group/individual STEM projects and provided technical support for other camp activities</li>
                        <li>Maintained and oversaw 60+ devices, ensuring they were functional for camp activities</li>
                    </ul>
                </div>
            </div>

            <div id="certifications" className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 border-b pb-2 mb-6 text-center block">Certifications</h2>
                <p className="text-base text-gray-700 mb-4">
                    Over the 2024 summer, I focused on enhancing my Full Stack Web Development skills and obtained the following certifications:
                </p>
                <ul className="list-disc list-inside text-base text-gray-700 space-y-1">
                    <li><a target="_blank" href="https://www.freecodecamp.org/certification/fcc1ec8fbae-322c-4baf-8dcd-bc4af792daa6/responsive-web-design" className="text-blue-500 hover:underline">Responsive Web Design Certification</a></li>
                    <li><a target="_blank" href="https://www.freecodecamp.org/certification/fcc1ec8fbae-322c-4baf-8dcd-bc4af792daa6/javascript-algorithms-and-data-structures-v8" className="text-blue-500 hover:underline">JavaScript Algorithms and Data Structures Certification</a></li>
                    <li><a target="_blank" href="https://www.freecodecamp.org/certification/fcc1ec8fbae-322c-4baf-8dcd-bc4af792daa6/front-end-development-libraries" className="text-blue-500 hover:underline">Front End Development Libraries Certification</a></li>
                    <li><a target="_blank" href="https://www.freecodecamp.org/certification/fcc1ec8fbae-322c-4baf-8dcd-bc4af792daa6/back-end-development-and-apis" className="text-blue-500 hover:underline">Back End Development and APIs Certification</a></li>
                </ul>
            </div>

            <div id="courses" className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 border-b pb-2 mb-6 text-center block">Relevant Coursework</h2>
                <ul className="list-disc list-inside text-base text-gray-700 space-y-1">
                    <li>CS 1331 - Object Oriented Programming</li>
                    <li>CS 1332 - Data Structures and Algorithms</li>
                    <li>CS 2050 - Discrete Mathematics</li>
                    <li>CS 2110 - Computer Organization and Programming</li>
                    <li>CS 2340 - Objects and Design</li>
                </ul>
            </div>

            <div id="transcript" className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 border-b pb-2 mb-6 text-center block">Transcript</h2>
                <p className="text-base text-gray-700 mb-4">Here's a link to an outdated transcript. I'll get a new online version when I'm back on campus. Sorry for the inconvenience:</p>
                <h2 className="text-center"><a href="/resume.pdf" target="_blank" className="border-2 border-black px-4 rounded-lg  py-2 mx-auto text-blue-500 hover:underline">Open Transcript</a></h2>
            </div>

            <div id="other" className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 border-b pb-2 mb-6 text-center block">Volunteering/Other Jobs</h2>
                <div className="mb-6">
                    <div className="flex flex-wrap justify-between">
                        <h3 className="text-lg font-semibold text-gray-600">Littleton Youth Soccer Club - <span className="text-sm text-gray-500 italic">Volunteer (Full Stack Web Development)</span></h3>
                    </div>
                    <p className="text-sm text-gray-600 italic">May 2024 - Present</p>
                    <ul className="list-disc list-inside text-base text-gray-700 mt-2 space-y-1">
                        <li>Streamlined soccer tryouts by designing a full-stack web application, enabling evaluators to perform assessments using mobile devices.</li>
                        <li>Utilized historical team data to develop a player evaluation algorithm, simplifying the team creation process.</li>
                        <li>Integrated the evaluation algorithm with Google Apps Script, saving LYSC Directors over 40 hours previously spent on manual team formation and data entry.</li>
                        <li>Trained LYSC Evaluators on utilizing the newly-built software, ensuring minimal mishaps/errors during the Spring Evaluation Cycle.</li>
                    </ul>
                </div>
                <div>
                    <div className="flex flex-wrap justify-between">
                        <h3 className="text-lg font-semibold text-gray-600">Georgia Tech Football Team - <span className="text-sm text-gray-500 italic">Student Videographer</span></h3>
                    </div>
                    <p className="text-sm text-gray-600 italic">August 2023 - Present</p>
                    <ul className="list-disc list-inside text-base text-gray-700 mt-2 space-y-1">
                        <li>Videographed daily football practices from various angles (Endzone, Sideline, Ground level) for coaches' breakdown and social media purposes.</li>
                        <li>Aided in the set-up/breakdown of cameras across Bobby Dodd Stadium/Brock Practice Facility for filming.</li>
                        <li>Assisted with editing coaches' film from drills at practice.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ResumeInfo;
