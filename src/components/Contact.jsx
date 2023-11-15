import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const formRef = useRef();

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_3kvm23g",
        "template_hglo72g",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_name: "Bogonko",
          to_email: "eddy._bogonko@outlook.com"
        },
        "sWXi825228nNtj1gm"
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          alert("Message Sent Successfully. I'll get back to you ASAP");

          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
          alert("Message Failed to Send. Please try again later");
        }
      );
  };

  return (
    <div className="vl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in Touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-8 mt-12"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
          </label>
          <input
            onChange={handleChange}
            name="name"
            type="text"
            placeholder="What's your name?"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
          />
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
          </label>
          <input
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="What's your email?"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
          />
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Message</span>
          </label>
          <textarea
            rows="5"
            onChange={handleChange}
            name="message"
            placeholder="What's your Message"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
          />
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[400px]"
      >
        <EarthCanvas />
        
        
        </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "");
