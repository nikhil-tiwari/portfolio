import { ABOUT_TEXT } from "../constants/index"
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4" > 
        <motion.h1 whileInView={{ y: 0, opacity: 1 }} initial={{ y: -200, opacity: 0 }} transition={{ duration: 0.5 }} className="my-20 text-center text-4xl" >
            About <span className="text-neutral-500" >Me</span>
        </motion.h1>
        <motion.div whileInView={{ x: 0, opacity: 1 }} initial={{ x: -200, opacity: 0 }} transition={{ duration: 0.5 }} className="flex justify-center">
            <p className="max-w-4xl text-lg lg:text-xl py-4 px-6">
                {ABOUT_TEXT}
            </p>
        </motion.div>
    </div>
  )
}

export default About