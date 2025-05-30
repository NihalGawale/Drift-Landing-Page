"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { InstagramIcon } from "@/app/icons/icons";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center gap-y-16">
      <div className=":w-[90%] h-[60%] md:w-[70%] md:h-[40%] flex flex-col justify-center items-center relative gap-y-10">
        <div className="flex flex-col gap-y-3 md:gap-y-6 justify-center items-center">
          <div className="w-[180px] h-[28px] md:w-[400px] md:h-[58px] relative">
            <Image
              src="/assets/combined-logo.png"
              alt="drift-sneakers-brand-logo"
              fill={true}
              priority
            />
          </div>
          <p className="text-3xl md:text-5xl text-gray-600 font-black">
            Glide Beyond the Usual
          </p>
        </div>

        <div className="flex flex-col gap-y-2">
          <motion.div
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <p className="text-sm md:text-xl text-gray-500 flex justify-center">
              Stay Tuned!
            </p>
          </motion.div>

          <Link
            href="https://www.instagram.com/drift.india/"
            className="text-lg flex gap-x-2 justify-center items-center"
          >
            <InstagramIcon />
            <p>@drift.india</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
