/* eslint-disable no-unused-vars */
import { motion } from "framer-motion"
import { ComputersCanvas } from "./canvas"
import { styles } from "../styles"

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">

      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-content item-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"/>
          <div className="w-1 sm:h-80 h-40 violet-gradient mx-2"/>
        </div>
        <div>
          <h1 className="text-5xl font-bold text-white">Welcome to my portfolio!</h1>
          <p className="text-2xl font-medium text-white mt-5">I&apos;m a software developer based in Nairobi, Kenya.</p>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I&apos;m a Full Stack Developer, <br className="sm:block hidden"/>Mobile App Developer, and a Computer Science Student.
          </p>
        </div>
      </div>
      <ComputersCanvas />

      <div className="xs:bottom-10 bottom-32 width-full flex justify-center items-center position-absolute">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-secondary border-4 justify-center items-center flex p-2">
          <motion.dev
          animate={{ y: [0, 24, 0] }}
          transition = {{ duration: 1.5, repeat: Infinity, repeatType: 'loop'}} 
          className ="w-3 h-3 rounded-full bg-secondary mb-2"
          />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
