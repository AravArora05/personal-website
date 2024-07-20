import Link from "next/link";
import "../globals.css";

const ContactMe = () => {
  return (
  <>
      <h3 className="text-2xl font-bold text-center mb-4 text-black">CONTACT</h3>
      
      <p className="text-gray-700 mb-6">
        Thanks for visiting my portfolio! If you have any questions or want to reach out to me, you can contact me through the following methods:
      </p>
     
      <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li>
          <a href="mailto:aravarora05@gmail.com" className="underline hover:text-blue-600">aravarora05@gmail.com</a>
        </li>
        <li>
          <a href="mailto:aarora@gatech.edu" className="underline hover:text-blue-600">aarora@gatech.edu</a>
        </li>
        <li>
          <a href="tel:+19784931900" className="underline hover:text-blue-600">1+ (978)-493-1900</a>
        </li>
      </ul>
      
      <p className="text-gray-700 mb-3">
        Feel free to connect with me on <Link target="_blank" href="https://www.linkedin.com/in/arav-arora-5b5b1228b/" ><span className="text-blue-600 hover:underline">LinkedIn</span></Link>, and hopefully, we can stay in touch!
        <br />
        You can also follow my <Link target="_blank" href="https://github.com/AravArora05" ><span className="text-blue-600 hover:underline">GitHub</span></Link> to stay up to date with all of my new projects and learning!
      </p>
      
      <p className="text-gtNavy text-2xl font-semibold text-center">
        
        Go Jackets!
      </p>
   </>
  );
};

export default ContactMe;