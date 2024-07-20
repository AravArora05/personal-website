import Link from "next/link";
import Image from "next/image";
import "../globals.css";

const AboutMe = () => {
  return (
    <>
      <h3 className="text-2xl font-bold text-center mb-4 text-black">ABOUT</h3>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-black">Intro</h2>
        <p className="text-gray-700">
          Here's a little bit about me! It's a combination of mostly non-technical aspects of my life, but check my resume/projects for more technical information!
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-black">Some History</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Born and raised in Littleton, MA <i>(a small town in Central Massachusetts)</i></li>
          <li>Have one younger brother (Ishaan) who also hopes to be a Yellow Jacket one day and two incredible parents</li>
          <li>Served as my grade's class president at Littleton High School, advocating for diversity and mental health change</li>
          <li>Work for the GT football team as a videographer, assisting with filming practices, editing coaches' film, and setting up cameras across the stadium</li>
          <li>Currently Volunteer as a soccer coach for my local soccer club <i>(Littleton Youth Soccer Club)</i></li>
          <li>Last Spring, I head-coached a team of 9th/10th graders and we finished 2nd in the Central Mass League!</li>
          <li>Used to be <Link target="_blank" href="https://www.instagram.com/db3_tip/?hl=en"><span className="underline hover:text-blue-500">Travis Hunter's</span></Link> math tutor during high school (very weird fact)</li>
          <li>Can speak Hindi, Spanish, and English</li>
          <li>Not a great cook :(</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-black">I Like</h2>
        <ul className="list-disc list-inside text-gray-700 grid grid-cols-2 gap-2">
          <li>Brian Windhorst Basketball Podcasts</li>
          <li>Fantasy Football</li>
          <li>Watching March Madness</li>
          <li>Coaching Soccer</li>
          <li>Exploring Southeast U.S.A</li>
          <li>Utilising Hashmaps <i>(favorite data structure)</i></li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-black">Current Focus</h2>
        <p className="text-gray-700">
          Back in Atlanta for the fall semester, I'm excited to take CS 2340 Objects and Design, a class revolved around building real-world applications! I'm continuing my role with the football team, while also actively participating in the GT Data Science Club.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-black">Cool Pictures</h2>
        <div className="mb-4">
          <div className="relative w-full h-80 mb-4">
            <Image
              src="/socce.png"
              alt="Me and my friends at a Revs game"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <p className="text-gray-600 text-sm text-center">Me and my friends at a Revs game this summer</p>
        </div>
        <div className="mb-4">
          <div className="relative w-full h-80 mb-4">
            <Image
              src="/tampa.png"
              alt="Tampa Bay View"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <p className="text-gray-600 text-sm text-center">My view filming at the Gasparilla Bowl in Tampa</p>
        </div>
      </section>
      
      <p className="text-gray-600 text-sm">
        Want to know more about my technical skills? Check out my <Link href="/resume"><span className="text-blue-600 hover:underline">resume</span></Link> or <Link href="/projects"><span className="text-blue-600 hover:underline">projects</span></Link>!
      </p>
    </>
  );
};

export default AboutMe;
