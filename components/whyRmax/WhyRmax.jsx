"use client";
import React from "react";
import { Calendar, Users, Star, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const WhyRmax = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      y: -5,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-7xl  mx-auto px-4 py-16 sm:px-6 lg:px-8"
    >
      {/* Header */}
      <motion.div variants={headerVariants} className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-6">Why Rmax?</h2>
        <p className="text-gray-600 w-[19rem] lg:w-[57rem] mx-auto">
          Rmax is designed to simplify and transform the way service businesses
          operate. From onboarding, scheduling and billing to client management,
          payments and growth, Rmax integrates everything in one easy-to-use
          platform connecting all the stake holders.
        </p>
      </motion.div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* First Column */}
        <div>
          {/* Scheduling Feature */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="bg-[#FAFAFA] w-full lg:w-[22.25rem] h-[15.25rem] border-[1px] border-[#E5E7EB]  rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col items-center h-full">
              <div className="mb-4">
                <Calendar className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Scheduling</h3>
              <p className="text-gray-600 flex flex-col items-center justify-center  mb-4 flex-grow">
                <span>Manage appointments, classes, and </span>
                <span>events, workshops with...</span>
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="text-blue-600  hover:text-blue-700 flex items-center"
              >
                View details
                <svg
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.button>
            </div>
          </motion.div>

          {/* Billing & Payments Feature */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="bg-[#FAFAFA]  w-full lg:w-[22.25rem] h-[29.75rem] border-[1px] border-[#E5E7EB] rounded-lg shadow-sm  hover:shadow-md transition-shadow mt-6"
          >
            <div className="flex flex-col h-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-4"
              >
                <img
                  src="https://s3-alpha-sig.figma.com/img/6fa6/e295/4d0e99797aa4929a2f6f84115cd97695?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k6q3f-f8-WoyWUgZdKJh5LRHaDQjSfT82Tl2pDqJJ6Ts8ardxa2jWnbD0ppDCTphhhJp4HJ7ebE~r0PmIqidjAHY8e~FyynwRpy8UJUAMEFrBzfpRBVFLI-4b-1i~CZyDHq3C88dhviBRAWkFsUgEHD0Xt~2B58XLILRZXwq5L5JmXaMn7tB9bTxJLdq-Q1xIa~QgmyKduFjAEr73O-NxvQ7wXamBZUwWcqO2dh8ZqnohVvL89tjCODlrBRIQ0b7XCh~eTw9wHUT3aZ3~Y7qpVR96HQd7FwovM~pBEEBTrtTdO3wm6di1OZUkkyFxKx5KtHRRoYOHRl~iuvJgNxS3g__"
                  alt="Billing & Payments"
                  className=" w-full h-[18rem] object-cover rounded-lg"
                />
              </motion.div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-xl  font-semibold mb-2">
                  Billing & Payments
                </h3>
                <p className="text-gray-600 flex flex-col items-center justify-center mb-4 flex-grow">
                  <span>Streamline invoicing and payments</span>{" "}
                  <span>with automated workflows, reducing ...</span>
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="text-blue-600 hover:text-blue-700 flex items-center "
                >
                  View details
                  <svg
                    className="w-4 h-4 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Second Column */}
        <div>
          {/* Client Management Feature */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="bg-[#FAFAFA]  w-full lg:w-[22.25rem] h-[12.83rem] border-[1px] border-[#E5E7EB] rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col items-center justify-center h-full">
              <div className="mb-4">
                <Users className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Client Management & CRM
              </h3>
              <p className="text-gray-600 flex items-center flex-col justify-center mb-4 flex-grow">
                <span> Keep track of customer data,</span>{" "}
                <span>preferences, and interactions to...</span>
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="text-blue-600 hover:text-blue-700 flex items-center"
              >
                View details
                <svg
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.button>
            </div>
          </motion.div>

          {/* Marketing Feature */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="bg-[#FAFAFA]  w-full lg:w-[22.25rem] h-[17.625rem] border-[1px] border-[#E5E7EB] rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow mt-6"
          >
            <div className="flex flex-col items-center justify-center h-full">
              <div className="mb-8 mt-2">
                <Briefcase className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Marketing & Engagement Tools
              </h3>
              <p className="text-gray-600 flex flex-col items-center justify-center mb-2 flex-grow">
                <span>Boost client retention and grow your</span>{" "}
                <span>business with integrated...</span>
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="text-blue-600 mb-6 hover:text-blue-700 flex items-center"
              >
                View details
                <svg
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.button>
            </div>
          </motion.div>

          {/* Multi-Location Feature */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="bg-[#FAFAFA]  w-full lg:w-[22.25rem] h-[12.83rem] border-[1px] border-[#E5E7EB] rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow mt-6"
          >
            <div className="flex flex-col items-center justify-center h-full">
              <h3 className="text-xl font-semibold mb-2">
                Multi-Location Management
              </h3>
              <p className="text-gray-600 flex flex-col items-center justify-center mb-4 flex-grow">
                <span>Manage multiple locations with ease,</span>{" "}
                <span>assigning roles and permissions...</span>
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="text-blue-600 hover:text-blue-700 flex items-center"
              >
                View details
                <svg
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Third Column */}
        <div>
          {/* AI Powered Insights Feature */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="bg-[#FAFAFA]  w-full lg:w-[22.25rem] h-[15.25rem] border-[1px] border-[#E5E7EB] rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col items-center justify-center h-full">
              <div className="mb-4">
                <Star className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                AI Powered Insights
              </h3>
              <p className="text-gray-600 flex flex-col items-center justify-center mb-4 flex-grow">
                <span>Know exactly what is happening in</span>{" "}
                <span>business and get actionable...</span>
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="text-blue-600 hover:text-blue-700 flex items-center"
              >
                View details
                <svg
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.button>
            </div>
          </motion.div>

          {/* Custom Branded Website Feature */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="bg-[#FAFAFA]  w-full lg:w-[22.25rem] h-[29.75rem] border-[1px] border-[#E5E7EB] rounded-lg shadow-sm hover:shadow-md transition-shadow mt-6"
          >
            <div className="flex flex-col h-full">
              <div className="flex flex-col mb-10 items-center justify-center">
                <h3 className="text-xl font-semibold mb-2 mt-4">
                  Custom Branded Website
                </h3>
                <p className="text-gray-600 flex flex-col items-center justify-center mb-2 mt-4 flex-grow">
                  <span>Quest's Custom Branded Website Builder</span>{" "}
                  <span>allows you to create a fully personalized ...</span>
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="text-blue-600 hover:text-blue-700 flex items-center"
                >
                  View details
                  <svg
                    className="w-4 h-4 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.button>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src="https://s3-alpha-sig.figma.com/img/6fa6/e295/4d0e99797aa4929a2f6f84115cd97695?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k6q3f-f8-WoyWUgZdKJh5LRHaDQjSfT82Tl2pDqJJ6Ts8ardxa2jWnbD0ppDCTphhhJp4HJ7ebE~r0PmIqidjAHY8e~FyynwRpy8UJUAMEFrBzfpRBVFLI-4b-1i~CZyDHq3C88dhviBRAWkFsUgEHD0Xt~2B58XLILRZXwq5L5JmXaMn7tB9bTxJLdq-Q1xIa~QgmyKduFjAEr73O-NxvQ7wXamBZUwWcqO2dh8ZqnohVvL89tjCODlrBRIQ0b7XCh~eTw9wHUT3aZ3~Y7qpVR96HQd7FwovM~pBEEBTrtTdO3wm6di1OZUkkyFxKx5KtHRRoYOHRl~iuvJgNxS3g__"
                  alt="Custom Branded Website"
                  className="w-full h-[18rem] object-cover rounded-lg"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default WhyRmax;
