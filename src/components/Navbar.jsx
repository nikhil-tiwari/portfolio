import logo from '../assets/nikhilLogo.png';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";
import { TbBrandLeetcode } from "react-icons/tb";

const Navbar = () => {
  return (
    <nav className="mb-12 flex items-center justify-between py-4 lg:py-6">
      <div className="flex flex-shrink-0 items-center pb-4">
        <img className='mx-2 w-10 lg:w-[70px]' src={logo} alt='logo' />
      </div>
      <div className='m-4 flex items-center justify-center gap-4 text-xl lg:text-2xl'>
        <a href="https://www.linkedin.com/in/-nikhiltiwari-/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/nikhil-tiwari" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://x.com/_nikhilcodes" target="_blank" rel="noopener noreferrer">
          <FaSquareXTwitter />
        </a>
        <a href="https://leetcode.com/u/nikhil-tiwari/" target="_blank" rel="noopener noreferrer">
          <TbBrandLeetcode />
        </a>
      </div>
    </nav>
  )
}

export default Navbar;
