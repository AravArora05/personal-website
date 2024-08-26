import Link from "next/link";
import ProjectCard from "./ProjectCard";

export default function AllProjects() {

    const projectDataTRP = {
        image: 'trp.png',
        title: 'TheRolePlayer.Co',
        description: `Built a sports blog aimed at bridging the realms of finance and sports analytics. The website aims to provide avid fans with an unique manner of analysing their favorite sport!
        - Implemented a Go backend to manage communication between the frontend and the MongoDB article database.`,
        date: 'May 2024 - Present',
        demoLink: 'https://theroleplayer.vercel.app/',
        githubLink: 'https://github.com/WillPalaia/LYSA-Eval-Framework',
        techStack: [
          { name: 'MongoDB', icon: 'logos:mongodb' },
          { name: 'Go', icon: 'logos:go' },
          { name: 'React', icon: 'logos:react' },
          { name: 'Next.js', icon: 'logos:nextjs' },
          { name: 'Boostrap', icon: 'logos:boostrap' }
        ]
      };
      

  const projectDataLYSC = {
    image: 'soccer6.png',
    title: 'Littleton Youth Soccer Club Evaluation Software',
    description: `• Spearheaded the development of a full-stack web app for LYSC to streamline soccer tryouts(change from paper to tablet-based tryout software)
      • Created custom Google Apps scripts to automate data processes, integrating with Google Sheets for real-time updates
      • Developed the frontend using HTML/CSS, and implemented Node.js backend with RESTful API endpoints`,
    date: 'April 2024 – Present',
    demoLink: 'https://marvelous-maamoul-3f9e34.netlify.app/',
    githubLink: 'https://github.com/AravArora05/lys_eval',
    techStack: [

      { name: 'HTML', icon: 'logos:html-5' },
      { name: 'CSS', icon: 'logos:css-3' },
      { name: 'AWS EC2', icon: 'logos:aws-ec2' },
      { name: 'Node.js', icon: 'logos:nodejs' }
    ]
  };
  

  const projectAdmitWise = {
    image: 'soccer6.png',
    title: 'Personify',
    description: `• Assisted in designing Figma prototypes
    • Implemented a web scraper template to systematically extract class information from the top 100 US News-ranked schools
    • Utilised/integrated a Pinecone vector database with Next.js to enhance data indexing, search capabilities, and retrieval speed
    • Developed frontend using Next.js + Tailwind CSS, incorporating web-scraped information for functionality in multiple pages`,
    date: 'Jul 2024 – Present',
    demoLink: 'https://www.personifyapp.ai/',
    githubLink: 'https://github.com/SamarthTewari/counsler-hosting',
    techStack: [
      { name: 'Google Sheets', icon: 'logos:google-sheets' },
      { name: 'Google Apps Script', icon: 'logos:google-apps-script' },
      { name: 'HTML/CSS', icon: 'logos:html-5' },
      { name: 'Tailwind CSS Icon', icon: 'logos:tailwindcss-icon' }
    ]
  };



  

  return (
    <>
      <h3 className="text-2xl font-bold text-center mb-4 text-black">PROJECTS</h3>
      <p className="text-gray-700 mb-6">
        Welcome to my projects section! Here is a collection of my favorite projects I've completed over the past year. To keep the containers concise, I've provided brief descriptions. For more detailed information, please refer to my <Link target="_blank"  href="/AravAroraResume.pdf"><span className="text-blue-600 hover:underline">resume</span></Link> or the README files in the <Link href="https://github.com/AravArora05" target="_blank" ><span className="text-blue-600 hover:underline">GitHub</span></Link> repositories.
      </p>

      <ProjectCard project={projectDataLYSC} />
      <ProjectCard project={projectDataTRP} />
      <ProjectCard project={projectAdmitWise} />
    </>
  );
}
