"use client"
import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion, useAnimation } from 'framer-motion';

const ContactForm = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1 }
    }
  };

  const fieldVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  return (
    <div className="w-full max-w-6xl  mx-auto px-4 ">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <motion.h1
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
          className="text-4xl md:text-5xl font-bold leading-tight mb-2">
            Get in touch with us.
            <br className="hidden md:block lg:block" />
            We&#39;re here to assist you.
          </motion.h1>
        </div>

        <motion.form
         initial="hidden"
         animate={controls}
         variants={formVariants}
        className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Business Name Field */}
            <motion.div
            variants={fieldVariants} 
            className="space-y-2">
              <label className="text-sm font-medium">
                Business Name
                <span className="text-red-500">*</span>
              </label>
              <Input 
                type="text" 
                placeholder="Search for your business listing"
                className="w-full bg-[#FFFFFF] p-3 h-[3.5rem]"
              />
              

            </motion.div>

            {/* Your Name Field */}
            <motion.div 
            variants={fieldVariants} 
            className="space-y-2">
              <label className="text-sm font-medium">
                Your Name
                <span className="text-red-500">*</span>
              </label>
              <Input 
                type="text" 
                placeholder="Enter your name"
                className="w-full bg-[#FFFFFF] h-[3.5rem]  p-3"
              />
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Phone Number Field */}
            <motion.div
            variants={fieldVariants} 
            className="space-y-2">
              <label className="text-sm font-medium">
                Phone Number
                <span className="text-red-500">*</span>
              </label>
              <div className="flex">
                <Select defaultValue="+91">
                  <SelectTrigger className="w-24 bg-[#FFFFFF]  h-[3.5rem]">
                    <SelectValue placeholder="+91" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="+91">+91</SelectItem>
                    <SelectItem value="+1">+1</SelectItem>
                    <SelectItem value="+44">+44</SelectItem>
                  </SelectContent>
                </Select>
                <Input 
                  type="tel" 
                  placeholder="98511"
                  className="flex-1  bg-[#FFFFFF] h-[3.5rem] ml-[0.01rem] "
                />
              </div>
            </motion.div>

            {/* Email Address Field */}
            <motion.div
            variants={fieldVariants} 
            
            className="space-y-2">
              <label className="text-sm font-medium">
                Email Address
              </label>
              <Input 
                type="email" 
                placeholder="e.g xyz@gmail.com"
                className="w-full bg-[#FFFFFF] h-[3.5rem] p-3"
              />
            </motion.div>
          </div>

          {/* Message Field */}
          <motion.div
          variants={fieldVariants} 
          className="space-y-2">
            <label className="text-sm font-medium">
              Message
              <span className="text-red-500">*</span>
            </label>
            <Textarea 
              placeholder="Write here your message..."
              className="w-full bg-[#FFFFFF] p-3 min-h-[120px]"
            />
          </motion.div>

          {/* Submit Button */}
          <motion.button
          variants={fieldVariants}  
            type="submit"
            className="bg-[#F54F35] hover:bg-red-600 text-white px-5 py-3 rounded-md flex items-center gap-2"
          >
            Leave us a Message
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.form>
      </div>
    </div>
  )
}

export default ContactForm