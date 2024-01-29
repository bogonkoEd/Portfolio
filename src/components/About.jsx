import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-purple-200 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-20 h-20 object-contain" />
          <h3 className="mt-4 mb-2 text-xl font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} >
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className="text-lg">
        As a Full Stack and Mobile App Developer with a strong foundation in
        Computer Science, I am currently enrolled at Strathmore
        University, where I am pursuing a Bachelor&apos;s Degree in Computer Science.
        My journey in software development is marked by a deep understanding of
        Python and JavaScript, and a proficiency in frameworks like React,
        Node.js, and Three.js. I am known for my quick learning ability and my
        commitment to collaborating closely with teammates to develop efficient,
        scalable, and user-friendly solutions that effectively address
        real-world challenges. Let&apos;s collaborate to transform your visionary
        ideas into reality!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
