"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const PricingDetails = () => {
  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5 } },
  };

  const planVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.4, duration: 0.5 },
    },
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Flexible Plans,
          <br />
          Transparent Pricing
        </h1>
        <p className="text-gray-600 mb-2">Find the Perfect Fit for You</p>
        <p className="text-red-500">
          30-day free trial with money-back guarantee.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-center">
          Compare our plans
        </h2>
      </div>

      <div className="  flex m-auto  overflow-x-auto">
        <div className="flex flex-nowrap md:flex-row min-w-max md:min-w-0 gap-16 lg:gap-56 m-auto items-start justify-center px-4">
          {/* Features Column */}
          <motion.div
            variants={featureVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex-1 space-y-8 "
          >
            <h2 className="text-xl font-semibold mb-6">Features</h2>
            <div className="space-y-12">
              <div>
                <h3 className="text-lg font-semibold mb-6">Basic Management</h3>
                <div className="space-y-8">
                  <div className="text-gray-600 pb-4">Users</div>
                  <div className="text-gray-600 pb-4">Branches</div>
                  <div className="text-gray-600 pb-4">Courses</div>
                  <div className="text-gray-600 pb-4">
                    Max. Students Allowed
                  </div>
                  <div className="text-gray-600 pb-4">Communication</div>
                  <div className="text-gray-600 pb-4">Bulk Updates</div>
                  <div className="text-gray-600 pb-4">User Roles</div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex  items-center justify-center gap-16">
            {/* Starter Plan */}
            <motion.div
              variants={planVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex-1  space-y-8 "
            >
              <div className="mb-12">
                <h2 className="text-xl font-semibold mb-2">Starter</h2>
                <div className="text-gray-600">$17/month, billed monthly</div>
              </div>
              <div className="space-y-8">
                <div className="border-b w-48 text-gray-500   border-gray-200 pb-4">
                  1
                </div>
                <div className="border-b w-48 text-gray-500  border-gray-200 pb-4">
                  1
                </div>
                <div className="border-b w-48 text-gray-500  border-gray-200 pb-4">
                  3
                </div>
                <div className="border-b w-48 text-gray-500  border-gray-200 pb-4">
                  25
                </div>
                <div className="border-b w-48 text-gray-500  border-gray-200 pb-4">
                  25
                </div>
                <div className="border-b w-48 text-gray-500  border-gray-200 pb-4">
                  25
                </div>
                <div className="border-b w-48 text-gray-500  border-gray-200 pb-4">
                  25
                </div>
              </div>
              <div className="pt-8">
                <button className="group bg-red-50 hover:bg-red-100 text-red-500 px-6 py-3 rounded-lg flex font-[500] items-center gap-2 transition-colors">
                  Get Started
                  <ArrowRight
                    className="group-hover:translate-x-1 transition-transform"
                    size={20}
                  />
                </button>
                <p className="mt-4 text-gray-600 text-sm">
                  No credit card required
                </p>
              </div>
            </motion.div>

            {/* Premium Plan */}
            <motion.div
              variants={planVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex-1 space-y-8 "
            >
              <div className="mb-12">
                <h2 className="text-xl font-semibold mb-2">Premium</h2>
                <div className="text-gray-600">$88/month, billed monthly</div>
              </div>
              <div className="space-y-8">
                <div className="border-b w-48 text-gray-500  border-gray-200 pb-4">
                  15
                </div>
                <div className="border-b w-48 text-gray-500  border-gray-200 pb-4">
                  10
                </div>
                <div className="border-b w-48 text-gray-500  border-gray-200 pb-4">
                  15/branch
                </div>
                <div className="border-b w-48 text-gray-500  border-gray-200 pb-4">
                  500
                </div>
                <div className="border-b w-48 text-gray-500  border-gray-200 pb-4">
                  Yes
                </div>
                <div className="border-b w-48 text-gray-500  border-gray-200 pb-4">
                  Yes
                </div>
                <div className="border-b w-48 text-gray-500  border-gray-200 pb-4">
                  Yes
                </div>
              </div>
              <div className="pt-8">
                <button className="group bg-red-50 hover:bg-red-100 text-red-500 font-[500] px-6 py-3 rounded-lg flex items-center gap-2 transition-colors">
                  Get Started
                  <ArrowRight
                    className="group-hover:translate-x-1 transition-transform"
                    size={20}
                  />
                </button>
                <p className="mt-4 text-gray-600 text-sm">
                  No credit card required
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingDetails;
