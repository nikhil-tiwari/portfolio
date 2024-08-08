import { HERO_CONTENT } from "../constants/index";
import profilepic from "../assets/kevinRushProfile.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:pb-8">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:pr-8">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-8 text-4xl lg:text-5xl font-thin tracking-tight lg:mt-8"
            >
              Nikhil Tiwari
            </motion.h1>
            <motion.span
              variants={container(0.2)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl lg:text-3xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(0.4)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-md lg:max-w-xl py-4 lg:py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:pl-8">
          <motion.img initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }} className="w-1/2 lg:w-2/3" src={profilepic} alt="profile-pic" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
