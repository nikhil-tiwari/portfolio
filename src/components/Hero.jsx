import { HERO_CONTENT } from '../constants/index';
import profilepic from '../assets/kevinRushProfile.png';

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:pb-8">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:pr-8">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-8 text-4xl lg:text-5xl font-thin tracking-tight lg:mt-8">Nikhil Tiwari</h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl lg:text-4xl tracking-tight text-transparent">Full Stack Developer</span>
            <p className='my-2 max-w-md lg:max-w-xl py-4 lg:py-6 font-light tracking-tighter'>{HERO_CONTENT}</p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:pl-8">
          <img className="w-1/2 lg:w-2/3" src={profilepic} alt='profile-pic' />
        </div>
      </div>
    </div>
  )
}

export default Hero;
