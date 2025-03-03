/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";
const Service = () => {
  const industries = [
    {
      title: "Sports",
      image:
        "https://images.unsplash.com/photo-1565992441121-4367c2967103?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BvcnR8ZW58MHwxfDB8fHww",
      description:
        "From fitness studios to sports academies, Rmax empowers sports businesses",
      link: "Know more... ",
    },
    {
      title: "Healthcare & Wellness",
      image:
        "https://plus.unsplash.com/premium_photo-1665673312770-90df9f77ddfa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhbHRofGVufDB8MXwwfHx8MA%3D%3D",
      description:
        "Health and wellness service providers—from yoga instructors and gyms",
      link: "Know more...",
    },
    {
      title: "Learning Activites",
      image:
        "https://images.unsplash.com/photo-1546773740-e13e5c8feb56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWN0aXZpdGllc3xlbnwwfDF8MHx8fDA%3D",
      description:
        "Tutors, educators, and learning centers—from music schools to art studios",
      link: "Know more...",
    },
    {
      title: "Sports",
      image:
        "https://images.unsplash.com/photo-1565992441121-4367c2967103?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BvcnR8ZW58MHwxfDB8fHww",
      description:
        "From fitness studios to sports academies, Rmax empowers sports businesses",
      link: "Know more...",
    },
    {
      title: "Healthcare & Wellness",
      image:
        "https://plus.unsplash.com/premium_photo-1665673312770-90df9f77ddfa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhbHRofGVufDB8MXwwfHx8MA%3D%3D",
      description:
        "Health and wellness service providers—from yoga instructors and gyms",
      link: "Know more...",
    },
    {
      title: "Learning Activites",
      image:
        "https://images.unsplash.com/photo-1546773740-e13e5c8feb56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWN0aXZpdGllc3xlbnwwfDF8MHx8fDA%3D",
      description:
        "Tutors, educators, and learning centers—from music schools to art studios",
      link: "Know more...",
    },
  ];

  return (
    <div className="max-w-7xl  mx-auto px-4 py-16 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6"
        >
          Empowering Service
          <br />
          Providers Across Industries
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 w-[20rem] lg:w-[45rem] mx-auto"
        >
          Whether youre in sports, education, wellness, household services, or
          niche markets, our technology simplifies your business operations,
          making it easier for you to focus on what you do best.
        </motion.p>
      </div>

      {/* Carousel Section */}

      <Carousel className="w-full">
        <CarouselContent className="ml-2 md:-ml-4">
          {industries.map((industry, index) => (
            <CarouselItem
              key={index}
              className="pl-2    md:pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <div className="w-[302px] h-[480px]  p-2   overflow-hidden">
                <div className="group h-[358px] overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-2">
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                    className="text-2xl font-semibold mb-2"
                  >
                    {industry.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                    className="text-gray-600 text-sm flex-1 pr-2"
                  >
                    {industry.description}
                  </motion.p>
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.6 }}
                    className="text-blue-600 hover:text-blue-700 flex items-center whitespace-nowrap"
                  >
                    {industry.link}
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </motion.button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious className="absolute bg-[#1F1F1F] text-white -left-12 top-1/2 transform -translate-y-1/2" />
          <CarouselNext className="absolute bg-[#1F1F1F] text-white right-10 top-1/2 transform -translate-y-1/2" />
        </div>
      </Carousel>
    </div>
  );
};

export default Service;
