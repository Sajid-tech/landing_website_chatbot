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
        "https://s3-alpha-sig.figma.com/img/0504/7078/30da040456770fb3f2ffd46adc51f7a7?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y09SnEALgwsiiBH2EJNPLnLCMlrkJh-9RMpZI29gQkbK-BsiQe7PzppUwN57ZcsuQGf~1UNRb7na5Ks0hBPYulJPd45xB-YWfEWN6Qzz78~zBfA64gkOPwJyOp9k4KYakwUgMUh5qevfgAfwTeeVpKBVEgeQTVTDzSDkWzs1yoadhVQX6tC8NvLeGwITfr-Vm0QSJZie6W~EYbowkGO94Wfi1ZtB9DjSAozdmbkZYv69ZLKKMvHTB4vW7345ISPgY6jiNR7KE9-J4qMdgtBOSbS39WZYDbvT4JUHQ7EypcB4eCEROwwbYJY6hF9a3d3i9KoALEYp3KBQgcHninD4rw__",
      description:
        "From fitness studios to sports academies, Rmax empowers sports businesses",
      link: "Know more... ",
    },
    {
      title: "Healthcare & Wellness",
      image:
        "https://s3-alpha-sig.figma.com/img/7a4f/7c58/ae1d0dda0c303d60bf404efbc2966468?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LQL6yCarVqlto3E0BcpX3HJsOAIXtNaS7CU6XNxubVWwzUCJQdAcj0BaAObeZAoT-AGJ0Op0aQ1GGSr0HXj5VZsIM9NMLwk34gDNHmLLXToOyg5s9g8735nEXqMb2IvBEmydMwZA2~FUWRDVThCazF4iEH1IEVUPNJ1fhPdPcDqTLt4UMgYZfV4vAD4m0s2nmo34ku1473ri40Yj5s~jtnfr0W6kzcofXp1LfJDDlZymnyTvnj4yF6N3RU2Sx~q8g78FwoSDjbkm4xhPBocZ6BEiFOBrw6hkd~vaUvq-yf429rFqwHnZ5mu3VScI-zUZ3HZ-Vz9bPTei~Zcd7-hd2w__",
      description:
        "Health and wellness service providers—from yoga instructors and gyms",
      link: "Know more...",
    },
    {
      title: "Learning Activites",
      image:
        "https://s3-alpha-sig.figma.com/img/c292/0c11/2e263161ef4a45f12493203574a95e19?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dpJXOlXNi~d~i7OiiRPGktStLRnlbQu1taPbG1wxC8dTbEUECgj5KxJ0aWQRBHLS1DNS-23wKthmOigqMBIXyivDQrVsdfYhdANKvkw2q0FUDVOR6TRSmE2E~iE1gNB3STZqajU7G8XyiuxND3mIPdxIVa0F2wkggQcYMgm-0dgAv494ElNwQFtPquDGYxKZVB9JvKROraBcB-JqEsO1hLvWHltwwP7o-EwYL5wh-44QyzJOfVlGD7tfr5okvWwcO-weL87f4YpwvO4usbuqtuC-SmNHbX8ryk0fPUA8lZiFl6qsTrGoS~z0X1nJHFqMMkCgsGgdh0mu9EsEMdhWGg__",
      description:
        "Tutors, educators, and learning centers—from music schools to art studios",
      link: "Know more...",
    },
    {
      title: "Sports",
      image:
        "https://s3-alpha-sig.figma.com/img/0504/7078/30da040456770fb3f2ffd46adc51f7a7?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y09SnEALgwsiiBH2EJNPLnLCMlrkJh-9RMpZI29gQkbK-BsiQe7PzppUwN57ZcsuQGf~1UNRb7na5Ks0hBPYulJPd45xB-YWfEWN6Qzz78~zBfA64gkOPwJyOp9k4KYakwUgMUh5qevfgAfwTeeVpKBVEgeQTVTDzSDkWzs1yoadhVQX6tC8NvLeGwITfr-Vm0QSJZie6W~EYbowkGO94Wfi1ZtB9DjSAozdmbkZYv69ZLKKMvHTB4vW7345ISPgY6jiNR7KE9-J4qMdgtBOSbS39WZYDbvT4JUHQ7EypcB4eCEROwwbYJY6hF9a3d3i9KoALEYp3KBQgcHninD4rw__",
      description:
        "From fitness studios to sports academies, Rmax empowers sports businesses",
      link: "Know more...",
    },
    {
      title: "Healthcare & Wellness",
      image:
        "https://s3-alpha-sig.figma.com/img/7a4f/7c58/ae1d0dda0c303d60bf404efbc2966468?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LQL6yCarVqlto3E0BcpX3HJsOAIXtNaS7CU6XNxubVWwzUCJQdAcj0BaAObeZAoT-AGJ0Op0aQ1GGSr0HXj5VZsIM9NMLwk34gDNHmLLXToOyg5s9g8735nEXqMb2IvBEmydMwZA2~FUWRDVThCazF4iEH1IEVUPNJ1fhPdPcDqTLt4UMgYZfV4vAD4m0s2nmo34ku1473ri40Yj5s~jtnfr0W6kzcofXp1LfJDDlZymnyTvnj4yF6N3RU2Sx~q8g78FwoSDjbkm4xhPBocZ6BEiFOBrw6hkd~vaUvq-yf429rFqwHnZ5mu3VScI-zUZ3HZ-Vz9bPTei~Zcd7-hd2w__",
      description:
        "Health and wellness service providers—from yoga instructors and gyms",
      link: "Know more...",
    },
    {
      title: "Learning Activites",
      image:
        "https://s3-alpha-sig.figma.com/img/c292/0c11/2e263161ef4a45f12493203574a95e19?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dpJXOlXNi~d~i7OiiRPGktStLRnlbQu1taPbG1wxC8dTbEUECgj5KxJ0aWQRBHLS1DNS-23wKthmOigqMBIXyivDQrVsdfYhdANKvkw2q0FUDVOR6TRSmE2E~iE1gNB3STZqajU7G8XyiuxND3mIPdxIVa0F2wkggQcYMgm-0dgAv494ElNwQFtPquDGYxKZVB9JvKROraBcB-JqEsO1hLvWHltwwP7o-EwYL5wh-44QyzJOfVlGD7tfr5okvWwcO-weL87f4YpwvO4usbuqtuC-SmNHbX8ryk0fPUA8lZiFl6qsTrGoS~z0X1nJHFqMMkCgsGgdh0mu9EsEMdhWGg__",
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
