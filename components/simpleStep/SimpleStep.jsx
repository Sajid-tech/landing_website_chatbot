"use client";
import React from "react";
import { User, Download, Layout } from "lucide-react";
import { motion } from "framer-motion";

const SimpleStep = () => {
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const circleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.2,
      },
    },
  };

  const numberVariants = {
    hidden: { scale: 0, x: "-5rem", y: 20 },
    visible: {
      scale: 1,
      x: "-5rem",
      y: 20,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  return (
    <div className=" max-w-7xl      mx-auto px-4 py-16 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={headerVariants}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Onboard business in 3 simple steps
        </h2>
        <p className="text-gray-600">
          Quick assisted onboarding with 30day free trial. No credit card
          needed.
        </p>
      </motion.div>

      {/* Steps Container */}
      <div className="grid grid-cols-1 md:grid-cols-3  gap-12 ">
        {/* Step 1 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stepVariants}
          className="flex flex-col relative items-center text-center"
        >
          {/* Step Number */}
          <motion.div
            variants={numberVariants}
            style={{ boxShadow: "8px 8px 80px 0px rgba(0, 0, 0, 0.25)" }}
            className=" bg-[#F6F6F7] w-10 h-10 rounded-full flex items-center justify-center translate-y-5 -translate-x-[5rem] text-xl font-semibold mb-4"
          >
            1
          </motion.div>

          {/* Icon Circle */}
          <motion.div
            variants={circleVariants}
            whileHover={{ scale: 1.05 }}
            style={{ boxShadow: "8px 8px 80px 0px rgba(0, 0, 0, 0.25)" }}
            className="bg-white p-4 flex items-center pt-8 justify-center rounded-full w-40 h-40"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center mb-6"
            >
              <User className="w-8 h-8 text-red-400" />
            </motion.div>
          </motion.div>

          {/* Arrow for desktop */}
          <div className="hidden md:block absolute translate-x-[16rem]  top-24 left-0 w-[40%]">
            <div className="relative" style={{ left: "33.33%" }}>
              <svg
                width="157"
                height="56"
                viewBox="0 0 157 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.4614 54.416C26.6427 49.2485 53.9717 40.2555 69.2441 17.9965C71.6257 14.5255 76.0581 5.37685 70.4031 2.53943C65.4403 0.0493599 55.6868 2.48732 52.4608 6.69485C44.0645 17.6459 36.8253 34.2189 53.9932 41.2653C72.6829 48.9364 98.8733 46.8283 118.48 43.7581C127.99 42.269 139.321 39.7266 148.035 35.562C153.819 32.7974 148.383 33.372 144.327 32.9703C138.557 32.399 125.235 31.0798 138.008 32.3446C143.198 32.8586 148.953 32.6057 153.741 31.7398C158.86 30.8139 150.737 35.9095 149.883 36.9191C147.19 40.1017 143.967 45.3601 143.55 49.5775"
                  stroke="#1F1F1F"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {/* Content */}
          <motion.div variants={stepVariants} transition={{ delay: 0.3 }}>
            <h3 className="text-xl font-semibold mt-16 mb-3">
              Claim your preset profile
            </h3>
            <p className="text-gray-600 w-[20rem]">
              Unlock tailored service and seamlessly elevate your experience by
              claiming your preset profile today.
            </p>
          </motion.div>
        </motion.div>

        {/* Step 2 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stepVariants}
          className="flex flex-col items-center relative text-center"
        >
          {/* Step Number */}
          <motion.div
            variants={numberVariants}
            style={{ boxShadow: "8px 8px 80px 0px rgba(0, 0, 0, 0.25)" }}
            className=" bg-[#F6F6F7] w-10 h-10 rounded-full flex items-center justify-center  translate-y-5 -translate-x-[5rem] text-xl font-semibold mb-4"
          >
            2
          </motion.div>

          {/* Icon Circle */}
          <motion.div
            variants={circleVariants}
            whileHover={{ scale: 1.05 }}
            style={{ boxShadow: "8px 8px 80px 0px rgba(0, 0, 0, 0.25)" }}
            className="bg-white p-4 flex items-center pt-8 justify-center rounded-full w-40 h-40"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center mb-6"
            >
              <Download className="w-8 h-8 text-red-400" />
            </motion.div>
          </motion.div>

          {/* Arrow for desktop */}
          <div className="hidden md:block absolute translate-x-[14rem]   top-24 left-0 w-[40%]">
            <div className="relative" style={{ left: "66.66%" }}>
              <svg
                width="157"
                height="56"
                viewBox="0 0 146 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 25.2319C9.50191 9.88558 27.9368 -8.69514 45.8057 6.88653C55.6999 15.5143 60.9042 40.0666 46.3455 47.3666C41.1403 49.9766 41.0493 43.8849 41.787 40.63C43.1266 34.7191 47.2288 29.9334 52.3436 26.856C65.2177 19.11 75.5548 31.5769 86.3528 36.5399C100.367 42.9812 121.232 43.592 135.717 38.224C148.236 33.5846 140.067 33.0785 131.638 29.322C125.229 26.4652 139.338 30.0339 141.355 30.8859C143.891 31.9565 146.426 31.0944 144.054 33.4723C140.037 37.5011 136.142 42.3078 132.718 46.8854"
                  stroke="#1F1F1F"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {/* Content */}
          <motion.div variants={stepVariants} transition={{ delay: 0.3 }}>
            <h3 className="text-xl mt-16 font-semibold mb-3">Add services</h3>
            <p className="text-gray-600 w-[20rem]">
              Make use of multiple scheduling, pricing options to add services.
              Choose from pre-created scheduling templates.
            </p>
          </motion.div>
        </motion.div>

        {/* Step 3 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stepVariants}
          className="flex flex-col items-center text-center"
        >
          {/* Step Number */}
          <motion.div
            variants={numberVariants}
            style={{ boxShadow: "8px 8px 80px 0px rgba(0, 0, 0, 0.25)" }}
            className="  bg-[#F6F6F7] w-10 h-10 rounded-full flex items-center justify-center  translate-y-5 -translate-x-[5rem] text-xl font-semibold mb-4"
          >
            3
          </motion.div>

          {/* Icon Circle */}
          <motion.div
            variants={circleVariants}
            whileHover={{ scale: 1.05 }}
            style={{ boxShadow: "8px 8px 80px 0px rgba(0, 0, 0, 0.25)" }}
            className="bg-white p-4 flex items-center pt-8 justify-center rounded-full w-40 h-40"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center mb-6"
            >
              <Layout className="w-8 h-8 text-red-400" />
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div variants={stepVariants} transition={{ delay: 0.3 }}>
            <h3 className="text-xl mt-16 font-semibold mb-3">Built Website</h3>
            <p className="text-gray-600 w-[20rem]">
              Build your online storefront your way, seamlessly integrating all
              services for a cohesive and efficient Client experience.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SimpleStep;
