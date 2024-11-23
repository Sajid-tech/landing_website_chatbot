"use client"
import React from "react";
import { motion } from 'framer-motion';

const Business = () => {
  return (
    <div className="w-full  max-w-4xl mx-auto px-4 py-8 text-center">
      <motion.h1
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-4xl md:text-5xl font-bold mb-6">
        Manage Your Business On the Go
      </motion.h1>

      <motion.p 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-gray-600 mb-10 max-w-2xl mx-auto text-lg">
        With free Business Mobile App, you can manage your entire service
        business from anywhere. Stay connected and stay in control, no matter
        where your day takes you.
      </motion.p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <motion.button
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
          variant="outline"
          className="w-[12.563] h-[4.625rem] gap-1   px-6 flex items-center rounded-xl bg-[#FFFFFF] border-[0.85px] border-[#090909]  text-lg"
        >
          <svg
            width="34"
            height="42"
            viewBox="0 0 34 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.9896 22.1218C28.03 18.9953 29.7162 16.0369 32.3913 14.3994C30.7037 11.9995 27.8771 10.4779 24.9364 10.3863C21.7999 10.0585 18.7591 12.2552 17.1608 12.2552C15.5315 12.2552 13.0706 10.4188 10.4207 10.4731C6.96658 10.5843 3.74649 12.5397 2.066 15.5467C-1.5464 21.7744 1.14812 30.927 4.6085 35.9611C6.3398 38.4261 8.36319 41.1796 11.0108 41.0819C13.6016 40.9749 14.5692 39.4369 17.6965 39.4369C20.7948 39.4369 21.7026 41.0819 24.4039 41.0198C27.184 40.9749 28.9355 38.5439 30.6061 36.0555C31.85 34.2991 32.8072 32.3579 33.4422 30.3038C30.1752 28.9278 27.9934 25.654 27.9896 22.1218Z"
              fill="#090909"
            />
            <path
              d="M22.8873 7.07569C24.4031 5.26376 25.1498 2.93484 24.969 0.583496C22.6532 0.825693 20.514 1.92779 18.9778 3.6702C17.4755 5.37262 16.6937 7.66057 16.8415 9.92203C19.1581 9.94579 21.4356 8.87356 22.8873 7.07569Z"
              fill="#090909"
            />
          </svg>

          <div className="flex flex-col items-start">
            <span className="font-medium text-2xl">App Store</span>
          </div>
        </motion.button>

        <motion.button
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
          variant="outline"
          className="w-[12.563] h-[4.625rem]  gap-1 px-6 flex items-center rounded-xl bg-[#FFFFFF] border-[0.85px] border-[#090909]"
        >
          <svg
            width="34"
            height="38"
            viewBox="0 0 35 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_ii_267_263)">
              <path
                d="M1.05874 0.738533C0.625166 1.19437 0.368896 1.90181 0.368896 2.81793V35.5496C0.368896 36.4672 0.625166 37.1732 1.05874 37.629L1.16899 37.7356L19.6277 19.3999V19.1838V18.9677L1.16899 0.630493L1.05874 0.738533Z"
                fill="url(#paint0_linear_267_263)"
              />
              <path
                d="M25.7796 25.5137L19.6277 19.3998V19.1837V18.9676L25.7811 12.8552L25.9197 12.9337L33.2099 17.0481C35.2913 18.2232 35.2913 20.1457 33.2099 21.3223L25.9197 25.4367L25.7796 25.5137Z"
                fill="url(#paint1_linear_267_263)"
              />
              <g filter="url(#filter1_i_267_263)">
                <path
                  d="M25.9193 25.4349L19.6259 19.1833L1.05835 37.6286C1.74372 38.3508 2.87755 38.4396 4.15442 37.7204L25.9193 25.4349Z"
                  fill="url(#paint2_linear_267_263)"
                />
              </g>
              <path
                d="M25.9193 12.9323L4.15442 0.64827C2.87755 -0.0724898 1.74372 0.0177906 1.05835 0.740031L19.6273 19.1853L25.9193 12.9323Z"
                fill="url(#paint3_linear_267_263)"
              />
            </g>
            <defs>
              <filter
                id="filter0_ii_267_263"
                x="0.368896"
                y="0.150879"
                width="34.4021"
                height="38.0663"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="-0.224797" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_267_263"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="0.224797" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_innerShadow_267_263"
                  result="effect2_innerShadow_267_263"
                />
              </filter>
              <filter
                id="filter1_i_267_263"
                x="1.05835"
                y="19.1833"
                width="24.8611"
                height="19.0338"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="-0.224797" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_267_263"
                />
              </filter>
              <linearGradient
                id="paint0_linear_267_263"
                x1="17.9915"
                y1="2.47161"
                x2="-6.84532"
                y2="27.4751"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00A0FF" />
                <stop offset="0.0066" stopColor="#00A1FF" />
                <stop offset="0.2601" stopColor="#00BEFF" />
                <stop offset="0.5122" stopColor="#00D2FF" />
                <stop offset="0.7604" stopColor="#00DFFF" />
                <stop offset="1" stopColor="#00E3FF" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_267_263"
                x1="35.9193"
                y1="19.1837"
                x2="-0.130871"
                y2="19.1837"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFE000" />
                <stop offset="0.4087" stopColor="#FFBD00" />
                <stop offset="0.7754" stopColor="#FFA500" />
                <stop offset="1" stopColor="#FF9C00" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_267_263"
                x1="22.5016"
                y1="22.5783"
                x2="-11.1803"
                y2="56.4861"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF3A44" />
                <stop offset="1" stopColor="#C31162" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_267_263"
                x1="-3.61794"
                y1="-10.156"
                x2="11.4219"
                y2="4.98475"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#32A071" />
                <stop offset="0.0685" stopColor="#2DA771" />
                <stop offset="0.4762" stopColor="#15CF74" />
                <stop offset="0.8009" stopColor="#06E775" />
                <stop offset="1" stopColor="#00F076" />
              </linearGradient>
            </defs>
          </svg>

          <div className="flex flex-col items-start">
            <span className="font-medium text-[1.25rem] ">Google Play</span>
          </div>
        </motion.button>
      </div>
    </div>
  );
};

export default Business;
