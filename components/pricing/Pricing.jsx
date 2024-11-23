"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Check, X, ArrowRight } from "lucide-react";
const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const plans = [
    {
      name: "STARTER",
      price: billingCycle === "monthly" ? 17 : 153,
      period: billingCycle,
      features: [
        { name: "Commercial License", included: true },
        { name: "100+ HTML UI Elements", included: true },
        { name: "Unlimited Domain Support", included: true },
        { name: "6 Month Premium Support", included: false },
        { name: "Life Time Updates", included: false },
      ],
    },
    {
      name: "PREMIUM",
      price: billingCycle === "monthly" ? 88 : 792,
      period: billingCycle,
      features: [
        { name: "Commercial License", included: true },
        { name: "100+ HTML UI Elements", included: true },
        { name: "Unlimited Domain Support", included: true },
        { name: "6 Month Premium Support", included: true },
        { name: "Life Time Updates", included: true },
      ],
    },
  ];
  return (
    <div className="max-w-7xl  mx-auto px-4 py-16 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4"
        >
          Choose Plan
          <br />
          Thats Right For You
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 "
        >
          Simple and transparent pricing. Start for free, upgrade when you love
          it.
        </motion.p>
        <Button variant="primary" className="mb-3 text-red-700 text-sm">
          30 day free trial in a button
        </Button>

        <div className="flex flex-col lg:flex-row  items-center justify-center gap-2 mb-4">
          <div>
            <span>Running a </span>
            <span className="font-bold ">Growth Business</span>
            <span> or </span>
            <span className="font-bold">Enterprise</span>
            <span>? Lets connect</span>
          </div>
          <div>
            <Button
              variant="destructive"
              className="bg-[#F54F35] py-1   hover:bg-red-600"
            >
              Talk to Sales
            </Button>
          </div>
        </div>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4">
          <span
            className={`${
              billingCycle === "monthly" ? "text-black" : "text-gray-500"
            }`}
          >
            Monthly
          </span>
          <Switch
            checked={billingCycle === "yearly"}
            onCheckedChange={(checked) =>
              setBillingCycle(checked ? "yearly" : "monthly")
            }
          />
          <span
            className={`${
              billingCycle === "yearly" ? "text-black" : "text-gray-500"
            }`}
          >
            Yearly
          </span>
          {(billingCycle === "yearly" || billingCycle === "monthly") && (
            <span className="bg-red-100 text-red-500 text-xs font-[500] px-2 py-1 rounded-3xl">
              SAVE 25%
            </span>
          )}
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="flex flex-col lg:flex-row  items-center justify-center   gap-8 max-w-4xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            key={plan.name}
            className="border w-[327px] rounded-lg p-8 bg-white"
          >
            <h3 className="text-red-500 font-medium mb-4">{plan.name}</h3>
            <div className="flex items-baseline mb-4">
              <span className="text-3xl font-semibold">$</span>
              <span className="text-6xl font-bold">{plan.price}</span>
              <span className="text-gray-600 ml-2">
                / {plan.period === "monthly" ? "month" : "year"}
              </span>
            </div>
            <p className="text-gray-600 mb-6">billed {plan.period}</p>

            <div className="space-y-4 mb-8">
              {plan.features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  {feature.included ? (
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                  ) : (
                    <X className="w-5 h-5 text-gray-400 mr-3" />
                  )}
                  <span
                    className={
                      feature.included ? "text-black" : "text-gray-400"
                    }
                  >
                    {feature.name}
                  </span>
                </div>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
              className="flex flex-row items-center justify-between w-[12.813rem] px-7 rounded-md p-4 bg-red-50 hover:bg-red-100 text-red-500 mb-4"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </motion.button>

            <p className="text-center text-sm font-medium text-gray-600">
              No credit card required
            </p>
          </motion.div>
        ))}
      </div>

      {/* Footer Link */}
      <div className="text-center mt-8">
        <a
          href="#"
          className="text-blue-600 border-b  font-medium border-blue-700 hover:text-blue-700"
        >
          Explore In-Depth Differences
        </a>
      </div>
    </div>
  );
};

export default Pricing;
