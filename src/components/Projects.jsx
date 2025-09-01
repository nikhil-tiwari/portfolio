import { PROJECTS } from "../constants/index";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((value, index) => (
          <div
            key={index + 1}
            className="mb-12 flex flex-wrap lg:justify-center"
          >
            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={value.image}
                alt={value.title}
                height={150}
                width={150}
                className="mb-6 rounded"
              />
            </motion.div>

            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{value.title}</h6>
              <p className="mb-4 text-neutral-400">{value.description}</p>
              <p className="mb-4">
                <a href={value.website} target="_blank">
                  Website
                </a>{" "}
                ||{" "}
                <a href={value.github} target="_blank">
                  Github
                </a>
              </p>
              <div className="flex flex-wrap gap-2">
                {value.technologies.map((techValue, index) => (
                  <span
                    key={index}
                    className="rounded bg-neutral-900 px-2 py-2 text-sm font-medium text-purple-900"
                  >
                    {techValue}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
