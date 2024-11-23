"use client";
import React, { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import Chatbot from "../chatBot/Chatbot";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const scaleIn = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.5 },
};

export const AiSearch = () => {
  return (
    <motion.div
      className="flex items-center pt-10 sm:pt-16 md:pt-20 mb-10 sm:mb-16 md:mb-20 w-auto justify-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="flex flex-col items-center bg-[#FFFFFF] rounded-l-lg px-2 sm:px-3 md:px-4 w-[70px] sm:w-[80px] md:w-[90px]"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <span className="text-black font-bold text-base sm:text-lg">AI</span>
        <span className="text-red-500 font-bold text-base sm:text-lg">
          RMax
        </span>
      </motion.div>
      <motion.input
        transition={{ duration: 0.5, delay: 0.3 }}
        type="text"
        placeholder="Curious? Let AI Uncover the Answers!"
        className="bg-[#FFFFFF] rounded-r-lg px-2 sm:px-3 md:px-4 py-[0.86rem] sm:py-4 ml-1 w-[200px] sm:w-[300px] md:w-[400px] text-[#CACACA] text-sm sm:text-base"
      />
    </motion.div>
  );
};

const Hero = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  return (
    <>
      <div className="max-w-7xl relative  m-auto  flex flex-col items-center justify-center  pt-2 sm:pt-3 md:pt-4 px-4 sm:px-6 md:px-8">
        {/* svg  */}

        <div className="absolute top-10 left-0 hidden md:hidden lg:block -z-50 ">
          <svg
            width="310"
            height="310"
            viewBox="0 0 323 323"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="161.5"
              cy="161.5"
              r="161"
              stroke="url(#paint0_linear_1_2379)"
              strokeDasharray="7 7"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_2379"
                x1="161.5"
                y1="0"
                x2="161.5"
                y2="323"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#D2DDE8" />
                <stop offset="1" stopColor="#D2DDE8" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="absolute  -right-28 -top-16 hidden md:hidden lg:block -z-50 ">
          <svg
            width="412"
            height="343"
            viewBox="0 0 412 343"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="372.5"
              cy="-29.5"
              r="372"
              stroke="#D2DDE8"
              strokeDasharray="7 7"
            />
          </svg>
        </div>
        {/* Logo and search bar */}
        <AiSearch />

        {/* Hero content */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="text-center max-w-[320px] sm:max-w-2xl md:max-w-4xl mx-auto"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-6xl font-bold mb-2 sm:mb-3 md:mb-4"
          >
            Maximize Your Impact
          </motion.h1>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-4 md:mb-6"
          >
            <span className="text-red-500">Business with </span>
            <span className="text-red-900">
              <span className="text-black">R</span>Max
            </span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-gray-600 text-sm sm:text-base md:text-md max-w-[280px] sm:max-w-lg md:max-w-xl mx-auto mb-6 sm:mb-8 md:mb-12"
          >
            Enhance your business with Rmax&#39;s all-in-one
            platform—streamlining client engagement, automating workflows, and
            fueling growth.
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 md:mb-16 w-full items-center sm:w-auto justify-center"
        >
          <motion.button
            variants={scaleIn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#F54F35] text-white px-4 sm:px-5 md:px-6 py-2 sm:py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-red-600 transition-colors w-[280px] sm:w-auto"
          >
            Get Started
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.button>
          <motion.button
            variants={scaleIn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#FFFFFF] border-[1px] border-[#E5E7EB] px-4 sm:px-5 md:px-6 py-2 sm:py-3 rounded-lg hover:bg-gray-100 transition-colors w-[280px] sm:w-auto"
          >
            Book A Demo
          </motion.button>
        </motion.div>

        {/* Feature Pills */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="flex flex-wrap  justify-center gap-3 sm:gap-4 md:gap-6 px-4 sm:px-0"
        >
          {[
            "Seamless Onboarding",
            "Client Engaementent",
            "Generate Report",
            "Revenue Growth",
          ].map((text, index) => (
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05, backgroundColor: "#F8F9FA" }}
              key={index}
              className="bg-[#FFFFFF] px-3 sm:px-4 md:px-6 py-2 rounded-lg text-gray-800 font-sm text-md sm:text-base whitespace-nowrap"
            >
              {text}
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Action Button */}
        <motion.button
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8 bg-gradient-to-r from-[#F57350] via-[#EF504B] to-[#E24077]  p-2 sm:p-3 rounded-lg text-white shadow-lg hover:bg-opacity-80  hover:animate-pulse transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            scale: [1, 1.1, 1],
            transition: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
        </motion.button>
        {/* Chatbot Dialog */}
        <Chatbot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      </div>
    </>
  );
};

export default Hero;
