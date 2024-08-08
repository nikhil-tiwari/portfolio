import { CONTACT } from "../constants/index"
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2 whileInView={{ y: 0, opacity: 1 }} initial={{ y: -100, opacity: 0 }} transition={{ duration: 0.5 }} className="my-10 text-center text-4xl">Get in Touch</motion.h2>
      <motion.div whileInView={{ x: 0, opacity: 1 }} initial={{ x: -100, opacity: 0 }} transition={{ duration: 0.5 }} className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href="mailto:nikhiltiwarig99@gmail.com" className="border-b">{CONTACT.email}</a>
      </motion.div>
    </div>
  )
}

export default Contact