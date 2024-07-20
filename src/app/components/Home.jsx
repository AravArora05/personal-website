// src/pages/index.js
import Link from "next/link";
import "../globals.css"

const Home = () => {
  return (
<>
      <h3 className="text-2xl font-bold text-center mb-4 text-black">HOME PAGE</h3>
      <p className="text-gray-700 mb-4">
        Welcome to my website! Feel free to use the navigation bar to learn more about{" "}
        <Link href="/about">
          <span className="link-span underline">about me</span>
        </Link>
        , dive into my{" "}
        <Link href="/projects">
          <span className="link-span underline">recent projects</span>
        </Link>
        , or{" "}
        <Link href="/contact">
          <span className="link-span underline">get in touch</span>
        </Link>
        . Whether you're interested in my background, curious about what I've been working on, or simply want to say hello, you're at the right place!
      </p>
    
      <div className="bg-blue-100 p-4 rounded-lg shadow-md mb-6">
        <h4 className="text-lg font-semibold text-black mb-2">Quick Links</h4>
        <ul className="grid grid-cols-2 gap-2">
          <li>
            <Link target="_blank" href="/AravAroraResume.pdf">
              <span className="link-span">
                📄 Resume <span className="italic">(PDF)</span>
              </span>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <span className="link-span">
                ⚡ Latest Project
              </span>
            </Link>
          </li>
          <li>
            <Link href="/skills">
              <span className="link-span">
                📊 Skills Stack
              </span>
            </Link>
          </li>
          <li>
            <Link target="_blank" href="https://github.com/AravArora05">
              <span className="link-span">
                🔗 GitHub Profile
              </span>
            </Link>
          </li>
        </ul>
      </div>
 </>
  );
};

export default Home;
