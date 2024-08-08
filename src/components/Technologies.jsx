import { FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiTypescript,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiPrisma,
  SiTailwindcss,
  SiRedux,
} from "react-icons/si";
import { motion } from "framer-motion";

const Technologies = () => {
  const iconVariant = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });

  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1 whileInView={{ y: 0, opacity: 1 }} initial={{ y: -100, opacity: 0 }} transition={{ duration: 1.5 }} className="my-20 text-center text-4xl">Technologies</motion.h1>
      <motion.div whileInView={{ x: 0, opacity: 1 }} initial={{ x: -100, opacity: 0 }} transition={{ duration: 1.5 }} className="flex flex-wrap items-center justify-center gap-6">
        <motion.div
          variants={iconVariant(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaJava className="text-6xl text-[#f44336]" />
        </motion.div>
        <motion.div
          variants={iconVariant(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <IoLogoJavascript className="text-6xl text-[#f7df1e]" />
        </motion.div>
        <motion.div
          variants={iconVariant(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiTypescript className="text-6xl text-[#3178c6]" />
        </motion.div>
        <motion.div
          variants={iconVariant(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaReact className="text-6xl text-[#61dafb]" />
        </motion.div>
        <motion.div
          variants={iconVariant(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiRedux className="text-6xl text-[#764abc]" />
        </motion.div>
        <motion.div
          variants={iconVariant(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiTailwindcss className="text-6xl text-[#38bdf8]" />
        </motion.div>
      </motion.div>
      <motion.div whileInView={{ x: 0, opacity: 1 }} initial={{ x: -100, opacity: 0 }} transition={{ duration: 1.5 }} className="mt-8 flex flex-wrap items-center justify-center gap-6">
        <motion.div
          variants={iconVariant(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaNodeJs className="text-6xl text-[#339933]" />
        </motion.div>
        <motion.div
          variants={iconVariant(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiExpress className="text-6xl text-[#faf7f7]" />
        </motion.div>
        <motion.div
          variants={iconVariant(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="text-6xl text-[#47a248]" />
        </motion.div>
        <motion.div
          variants={iconVariant(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMysql className="text-6xl text-[#4479a1]" />
        </motion.div>
        <motion.div
          variants={iconVariant(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiPrisma className="text-6xl text-[#2d3748]" />
        </motion.div>
        <motion.div
          variants={iconVariant(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaGitAlt className="text-6xl text-[#f05032]" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
