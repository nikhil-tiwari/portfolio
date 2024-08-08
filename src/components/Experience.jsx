import { EXPERIENCES } from "../constants/index"
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2 whileInView={{ y: 0, opacity: 1 }} initial={{ y: -100, opacity: 0 }} transition={{ duration: 0.5 }} className="my-20 text-center text-4xl">Experience</motion.h2>
      <div>
        {EXPERIENCES.map((value, index) => (
          <div key={index+1} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div whileInView={{ x: 0, opacity: 1 }} initial={{ x: -100, opacity: 0 }} transition={{ duration: 0.5 }} className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">{value.year}</p>
            </motion.div>
            <motion.div whileInView={{ x: 0, opacity: 1 }} initial={{ x: 100, opacity: 0 }} transition={{ duration: 0.5 }} className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{value.role} - <span className="text-sm text-purple-100" >{value.company}</span></h6>
              {value.description.map((desValue, index) => (
                <p className="mb-2 text-neutral-400" key={index+1}>{desValue}</p>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience