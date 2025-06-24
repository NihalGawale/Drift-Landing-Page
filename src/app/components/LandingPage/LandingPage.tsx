"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const LandingPage = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-full h-[90%] md:w-[70%] md:h-[40%] flex flex-col  relative gap-y-6 items-center">
        <div className="flex flex-col gap-y-3 md:gap-y-6 justify-center items-center">
          <div className="w-[150px] h-[30px] md:w-[300px] md:h-[60px] relative">
            <Image
              src="/assets/brand-full-logo-antiqueGold.png"
              alt="drift-sneakers-brand-logo"
              fill={true}
              priority
            />
          </div>
        </div>
        <div className="w-full flex justify-center flex-col items-center">
          <div className="w-full h-auto flex flex-col justify-center items-center gap-y-3">
            <h2 className="text-xl font-cormorant font-bold text-[#C4A77D]">
              Join the DRIFT Early Access Club!
            </h2>

            <p className="text-center text-gray-600 mb-6 font-inter text-xs">
              Be one of our first 100 exlusive members.
              <br /> Get exclusive access and a 10% offer <br /> on each
              purchase.
            </p>
          </div>

          <div className="w-[80%] h-auto flex flex-col px-10 py-6 rounded-xl border-1 gap-y-5 border-[#C4A77D] shadow-xs shadow-[#5F6473]">
            <div>
              <label
                htmlFor="first_name"
                className="block mb-1 text-xs text-[#C4A77D] tracking-wide"
              >
                First Name
              </label>
              <input
                type="text"
                id="first_name"
                className="border border-gray-300 text-[#5F6473] text-sm rounded-lg  focus:outline-1 focus:outline-[#C4A77D] block w-full p-2"
                placeholder="First Name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="first_name"
                className="block mb-1 text-xs text-[#C4A77D] tracking-wide"
              >
                Last Name
              </label>
              <input
                type="text"
                id="first_name"
                className="border border-gray-300 text-[#5F6473] text-sm rounded-lg  focus:outline-1 focus:outline-[#C4A77D] block w-full p-2"
                placeholder="Last Name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="first_name"
                className="block mb-1 text-xs text-[#C4A77D] tracking-wide"
              >
                Email
              </label>
              <input
                type="text"
                id="first_name"
                className="border border-gray-300 text-[#5F6473] text-sm rounded-lg  focus:outline-1 focus:outline-[#C4A77D] block w-full p-2"
                placeholder="Email"
                required
              />
            </div>
            <div>
              <label
                htmlFor="first_name"
                className="block mb-1 text-xs text-[#C4A77D] tracking-wide"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="first_name"
                className="border border-gray-300 text-[#5F6473] text-sm rounded-lg  focus:outline-1 focus:outline-[#C4A77D] block w-full p-2"
                placeholder="Phone Number"
                required
              />
            </div>

            <div className="w-full">
              <button className="w-full bg-[#C4A77D] text-xs py-3 rounded-full text-white">Pay 249.00 only & Join the Club.</button>
            </div>
          </div>

          <div className="flex flex-col gap-y-2 mt-5">
            <motion.div
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <p className="text-sm font-inter md:text-xl text-[#C4A77D] flex justify-center">
                Comming Soon!
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default LandingPage;
