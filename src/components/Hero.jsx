import React from "react";
import { styles } from "../styles";
import { ComputerCanvas } from "./canvas";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`${styles.paddingX} absolute top-[120px] max-w-7xl inset-0 mx-auto flex flex-row items-start gap-5 mb-3`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className={`h-5 w-5 rounded-full bg-[#915eff]`} />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <span className="text-[#915eff]">Tanmay</span>{" "}
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I craft scalable web solutions with React.js, Node.js, Next.js, and
            build cutting-edge AI-powered apps using Python, LangChain, and any
            tech you throw my way.
          </p>
        </div>
      </div>
      <ComputerCanvas />
      <div className="absolute xs:bottom-20 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] border-4 border-secondary flex p-2 rounded-3xl justify-center items-start">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop  ",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
