"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const LandingPage = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className=":w-[90%] h-[40%] md:w-[70%] md:h-[40%] flex flex-col justify-center items-center relative">
        <div className="w-full h-[30%] md:h-[60%] flex justify-center items-center">
          <div className="w-[200px] h-[30px] md:w-[500px] md:h-[78px] relative">
            <Image
              src="/assets/combined-logo.png"
              alt="drift-sneakers-brand-logo"
              fill={true}
              priority
            />
          </div>
        </div>
        <div className="w-full h-[40%] flex flex-col items-center pt-3 md:pt-0 md:justify-center gap-y-3 md:gap-y-8">
          <p className="text-lg md:text-6xl font-black text-white ">
            India's most premium sneaker brand
          </p>
          <motion.div
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <p className="text-sm md:text-xl">Stay Tuned!</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
