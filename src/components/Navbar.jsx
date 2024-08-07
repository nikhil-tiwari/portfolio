import logo from '../assets/kevinRushLogo.png';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";
import { TbBrandLeetcode } from "react-icons/tb";

const Navbar = () => {
  return (
    <nav className="mb-12 flex items-center justify-between py-4 lg:py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className='mx-2 w-8 lg:w-10' src={logo} alt='logo' />
      </div>
      <div className='m-4 flex items-center justify-center gap-4 text-xl lg:text-2xl'>
        <FaLinkedin />
        <FaGithub />
        <FaSquareXTwitter />
        <TbBrandLeetcode />
      </div>
    </nav>
  )
}

export default Navbar;
