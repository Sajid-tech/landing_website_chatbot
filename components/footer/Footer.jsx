import React from "react";
import {
  Apple,
  Facebook,
  Instagram,
  Linkedin,
  PlayCircle,
  Twitter,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#1F1F1F]   p-4 text-[#FAFAFA] py-16">
      <div className="w-full mx-auto px-2  lg:px-14">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-[350] text-[#ADADAD]  mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-orange-500 font-[350]">
                  About us
                </a>
              </li>
              <li>
                <Link
                  href="/support"
                  className="hover:text-orange-500 font-[350]"
                >
                  Contact us
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 font-[350]">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Business Size Section */}
          <div className="space-y-4">
            <h3 className="text-lg text-[#ADADAD] font-[350] mb-6">
              Business Size
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-orange-500 font-[350]">
                  Enterpreneurs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 font-[350]">
                  SMBs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 font-[350]">
                  Growth Business
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 font-[350]">
                  Household Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 font-[350]">
                  Enterprise
                </a>
              </li>
            </ul>
          </div>

          {/* Business Type Section */}
          <div className="space-y-4">
            <h3 className="text-lg text-[#ADADAD] font-[350] mb-6">
              Business Type
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-orange-500 font-[350]">
                  Health & Wellness
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 font-[350]">
                  Sports
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 font-[350]">
                  Learning Activities
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 font-[350]">
                  Household Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 font-[350]">
                  Miscellaneous
                </a>
              </li>
            </ul>
          </div>

          {/* Download Section */}
          <div className="space-y-4">
            <h3 className="text-lg text-[#ADADAD] font-[350] mb-6">Download</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <svg
                  width="17"
                  height="21"
                  viewBox="0 0 17 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.1988 11.1677C14.2196 9.54663 15.0859 8.01271 16.4601 7.16362C15.5931 5.91927 14.1411 5.13032 12.6303 5.08282C11.019 4.91284 9.45691 6.05184 8.63581 6.05184C7.79882 6.05184 6.53461 5.09969 5.17326 5.12784C3.3988 5.18546 1.74456 6.19938 0.881248 7.75851C-0.974531 10.9876 0.409713 15.7333 2.18739 18.3435C3.0768 19.6216 4.11627 21.0493 5.47639 20.9987C6.80735 20.9432 7.30444 20.1457 8.91102 20.1457C10.5027 20.1457 10.9691 20.9987 12.3568 20.9665C13.785 20.9432 14.6848 19.6827 15.543 18.3925C16.182 17.4818 16.6738 16.4752 17 15.4101C15.3216 14.6967 14.2008 12.9992 14.1988 11.1677Z"
                    fill="white"
                  />
                  <path
                    d="M11.5776 3.36624C12.3564 2.42675 12.74 1.21919 12.6471 0C11.4574 0.12558 10.3585 0.697026 9.56924 1.60047C8.79749 2.48319 8.39586 3.66951 8.47179 4.84209C9.66191 4.85441 10.8319 4.29845 11.5776 3.36624Z"
                    fill="white"
                  />
                </svg>

                <a href="#" className="hover:text-white font-[350]">
                  Business App
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  width="19"
                  height="20"
                  viewBox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_ii_267_203)">
                    <path
                      d="M0.362441 0.308717C0.134644 0.548215 -3.34452e-07 0.919905 -3.34452e-07 1.40123V18.5984C-3.34452e-07 19.0805 0.134644 19.4515 0.362441 19.691L0.420368 19.7469L10.1186 10.1134V9.99984V9.88631L0.420368 0.251953L0.362441 0.308717Z"
                      fill="url(#paint0_linear_267_203)"
                    />
                    <path
                      d="M13.3506 13.3255L10.1184 10.1133V9.99978V9.88626L13.3514 6.6748L13.4242 6.71602L17.2545 8.87772C18.3481 9.49513 18.3481 10.5052 17.2545 11.1234L13.4242 13.2851L13.3506 13.3255Z"
                      fill="url(#paint1_linear_267_203)"
                    />
                    <g filter="url(#filter1_i_267_203)">
                      <path
                        d="M13.424 13.2841L10.1174 9.99951L0.362061 19.6906C0.722153 20.0701 1.31787 20.1168 1.98874 19.7388L13.424 13.2841Z"
                        fill="url(#paint2_linear_267_203)"
                      />
                    </g>
                    <path
                      d="M13.424 6.71534L1.98874 0.261329C1.31787 -0.117358 0.722153 -0.0699245 0.362061 0.30954L10.1182 10.0007L13.424 6.71534Z"
                      fill="url(#paint3_linear_267_203)"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_ii_267_203"
                      x="0"
                      y="0"
                      width="18.0747"
                      height="19.9998"
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
                      <feOffset dy="-0.187331" />
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
                        result="effect1_innerShadow_267_203"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="0.187331" />
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
                        in2="effect1_innerShadow_267_203"
                        result="effect2_innerShadow_267_203"
                      />
                    </filter>
                    <filter
                      id="filter1_i_267_203"
                      x="0.362061"
                      y="9.99951"
                      width="13.062"
                      height="10.0002"
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
                      <feOffset dy="-0.187331" />
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
                        result="effect1_innerShadow_267_203"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_267_203"
                      x1="9.2589"
                      y1="1.21928"
                      x2="-3.79034"
                      y2="14.3561"
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
                      id="paint1_linear_267_203"
                      x1="18.678"
                      y1="9.99979"
                      x2="-0.262725"
                      y2="9.99979"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FFE000" />
                      <stop offset="0.4087" stopColor="#FFBD00" />
                      <stop offset="0.7754" stopColor="#FFA500" />
                      <stop offset="1" stopColor="#FF9C00" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_267_203"
                      x1="11.6283"
                      y1="11.7832"
                      x2="-6.0681"
                      y2="29.5984"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FF3A44" />
                      <stop offset="1" stopColor="#C31162" />
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_267_203"
                      x1="-2.09486"
                      y1="-5.41524"
                      x2="5.80708"
                      y2="2.53971"
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

                <a href="#" className="hover:text-white font-[350]">
                  Business App
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  width="17"
                  height="21"
                  viewBox="0 0 17 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.1988 11.1677C14.2196 9.54663 15.0859 8.01271 16.4601 7.16362C15.5931 5.91927 14.1411 5.13032 12.6303 5.08282C11.019 4.91284 9.45691 6.05184 8.63581 6.05184C7.79882 6.05184 6.53461 5.09969 5.17326 5.12784C3.3988 5.18546 1.74456 6.19938 0.881248 7.75851C-0.974531 10.9876 0.409713 15.7333 2.18739 18.3435C3.0768 19.6216 4.11627 21.0493 5.47639 20.9987C6.80735 20.9432 7.30444 20.1457 8.91102 20.1457C10.5027 20.1457 10.9691 20.9987 12.3568 20.9665C13.785 20.9432 14.6848 19.6827 15.543 18.3925C16.182 17.4818 16.6738 16.4752 17 15.4101C15.3216 14.6967 14.2008 12.9992 14.1988 11.1677Z"
                    fill="white"
                  />
                  <path
                    d="M11.5776 3.36624C12.3564 2.42675 12.74 1.21919 12.6471 0C11.4574 0.12558 10.3585 0.697026 9.56924 1.60047C8.79749 2.48319 8.39586 3.66951 8.47179 4.84209C9.66191 4.85441 10.8319 4.29845 11.5776 3.36624Z"
                    fill="white"
                  />
                </svg>

                <a href="#" className="hover:text-white font-[350]">
                  User App
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  width="19"
                  height="20"
                  viewBox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_ii_267_203)">
                    <path
                      d="M0.362441 0.308717C0.134644 0.548215 -3.34452e-07 0.919905 -3.34452e-07 1.40123V18.5984C-3.34452e-07 19.0805 0.134644 19.4515 0.362441 19.691L0.420368 19.7469L10.1186 10.1134V9.99984V9.88631L0.420368 0.251953L0.362441 0.308717Z"
                      fill="url(#paint0_linear_267_203)"
                    />
                    <path
                      d="M13.3506 13.3255L10.1184 10.1133V9.99978V9.88626L13.3514 6.6748L13.4242 6.71602L17.2545 8.87772C18.3481 9.49513 18.3481 10.5052 17.2545 11.1234L13.4242 13.2851L13.3506 13.3255Z"
                      fill="url(#paint1_linear_267_203)"
                    />
                    <g filter="url(#filter1_i_267_203)">
                      <path
                        d="M13.424 13.2841L10.1174 9.99951L0.362061 19.6906C0.722153 20.0701 1.31787 20.1168 1.98874 19.7388L13.424 13.2841Z"
                        fill="url(#paint2_linear_267_203)"
                      />
                    </g>
                    <path
                      d="M13.424 6.71534L1.98874 0.261329C1.31787 -0.117358 0.722153 -0.0699245 0.362061 0.30954L10.1182 10.0007L13.424 6.71534Z"
                      fill="url(#paint3_linear_267_203)"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_ii_267_203"
                      x="0"
                      y="0"
                      width="18.0747"
                      height="19.9998"
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
                      <feOffset dy="-0.187331" />
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
                        result="effect1_innerShadow_267_203"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="0.187331" />
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
                        in2="effect1_innerShadow_267_203"
                        result="effect2_innerShadow_267_203"
                      />
                    </filter>
                    <filter
                      id="filter1_i_267_203"
                      x="0.362061"
                      y="9.99951"
                      width="13.062"
                      height="10.0002"
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
                      <feOffset dy="-0.187331" />
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
                        result="effect1_innerShadow_267_203"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_267_203"
                      x1="9.2589"
                      y1="1.21928"
                      x2="-3.79034"
                      y2="14.3561"
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
                      id="paint1_linear_267_203"
                      x1="18.678"
                      y1="9.99979"
                      x2="-0.262725"
                      y2="9.99979"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FFE000" />
                      <stop offset="0.4087" stopColor="#FFBD00" />
                      <stop offset="0.7754" stopColor="#FFA500" />
                      <stop offset="1" stopColor="#FF9C00" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_267_203"
                      x1="11.6283"
                      y1="11.7832"
                      x2="-6.0681"
                      y2="29.5984"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FF3A44" />
                      <stop offset="1" stopColor="#C31162" />
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_267_203"
                      x1="-2.09486"
                      y1="-5.41524"
                      x2="5.80708"
                      y2="2.53971"
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

                <a href="#" className="hover:text-white font-[350]">
                  User App
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="space-y-4">
            <h3 className="text-lg text-[#ADADAD] font-[350] mb-6">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-white font-[350]">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white font-[350]">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white font-[350]">
                  Return Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-lg text-[#ADADAD] font-[350] mb-6">
              Contact us
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:support@Rmax.com" className="hover:text-white ">
                  support@Rmax.com
                </a>
              </li>
              <li>
                <a href="tel:+91-8459671235" className="hover:text-white">
                  +91-8459671235
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className=" mt-8 max-w-6xl flex  m-auto  border-b border-[#292f41]" />
        {/* Bottom Section */}
        <div className=" max-w-6xl mt-8 flex flex-col md:flex-row justify-between m-auto items-center gap-4">
          <p className="text-sm">© 2024 Copyright, All Right Reserved@RMax</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white">
              <Twitter size={24} />
            </a>
            <a href="#" className="hover:text-white">
              <Facebook size={24} />
            </a>
            <a href="#" className="hover:text-white">
              <Instagram size={24} />
            </a>
            <a href="#" className="hover:text-white">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
