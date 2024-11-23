"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, ChevronUp, ChevronRight } from "lucide-react";
import discoverLinks from "@/data/discoverLinks";
import manageLinks1 from "@/data/manageLinks1";
import manageLinks2 from "@/data/manageLinks2";
import growLinks from "@/data/growLinks";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <header className="sticky border-2   w-full md:w-[90%] rounded-none lg:rounded-md  md:rounded-md lg:w-[1056px] m-auto bottom-0 top-0 lg:top-4 left-0 right-0 bg-[#FFFFFF] z-50 border-b">
      <div className="mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href={"/"}>
            <div className=" p-1">
              <span className="text-[#A10F0F] font-bold text-lg">
                <span className="text-black">R</span>Max
              </span>
            </div>
          </Link>
        </div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
        <div className="hidden md:flex gap-2">
          {/* Navigation */}
          <nav className="flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900">
              Home
            </Link>

            {/* Features Dropdown Trigger */}
            <div ref={dropdownRef}>
              <div onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <button className="text-gray-700 flex items-center hover:text-gray-900">
                  <span>Features</span>
                  {isDropdownOpen ? (
                    <ChevronUp className="w-4 h-4 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                  )}
                </button>
              </div>

              {/* Dropdown Content */}
              {isDropdownOpen && (
                <div className="absolute mt-[1px] mx-auto   top-full left-0 w-[90vw] md:w-[720px] lg:w-[50rem] bg-white shadow-lg   p-4">
                  <div className="flex -top-4 flex-row items-start justify-around relative gap-6">
                    {/* Discover Column */}
                    <div>
                      <h3 className="font-semibold text-lg mb-4">Discover</h3>
                      <div className="space-y-4">
                        {discoverLinks.map((link, index) => (
                          <Link
                            key={index}
                            href="#"
                            onClick={() => setIsDropdownOpen(false)} // Close dropdown on link click
                            className="flex items-center gap-2 text-sm font-[350] text-gray-900 hover:text-gray-900"
                          >
                            {link.icon}
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                    {/* Vertical Divider */}

                    <div className="flex absolute -translate-x-40 justify-center">
                      <hr className="border border-gray-100 w-[1px] h-80" />
                    </div>
                    <div className="flex absolute translate-x-[10rem] justify-center">
                      <hr className="border border-gray-100 w-[1px] h-80" />
                    </div>

                    {/* Manage Column */}
                    <div>
                      <h3 className="font-semibold text-lg mb-4">Manage</h3>
                      <div className="flex items-center justify-center gap-3">
                        <div className="space-y-4">
                          {manageLinks1.map((link, index) => (
                            <Link
                              key={index}
                              href="#"
                              onClick={() => setIsDropdownOpen(false)}
                              className="flex items-center gap-2 text-sm font-[350] text-gray-900 hover:text-gray-900"
                            >
                              {link.icon}
                              {link.label}
                            </Link>
                          ))}
                        </div>
                        <div className="space-y-4">
                          {manageLinks2.map((link, index) => (
                            <Link
                              key={index}
                              href="#"
                              onClick={() => setIsDropdownOpen(false)}
                              className="flex items-center gap-2 text-sm font-[350] text-gray-900 hover:text-gray-900"
                            >
                              {link.icon}
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Grow Column */}
                    <div>
                      <h3 className="  font-semibold text-lg mb-4">Grow</h3>
                      <div className="space-y-4">
                        {growLinks.map((link, index) => (
                          <Link
                            key={index}
                            href="#"
                            onClick={() => setIsDropdownOpen(false)} // Close dropdown on link click
                            className="flex items-center gap-2 text-sm font-[350] text-gray-900 hover:text-gray-900"
                          >
                            {link.icon}
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="w-[40%]  rounded-lg mx-auto bg-[#FEF1EF] flex items-center justify-center p-3 mt-10">
                    <button className="text-red-500 font-medium text-sm flex items-center justify-center gap-1">
                      <span>See all features</span>{" "}
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/pricings"
              className="text-gray-700 hover:text-gray-900"
            >
              Pricing
            </Link>
            <div className="flex items-center gap-1">
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Solutions
              </a>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>
          </nav>
          <hr className="border-l-[2px] mt-3 border-gray-300 h-5 " />
          {/* Auth Buttons */}
          <div className="flex items-center gap-2">
            <button className="text-gray-700 bg-[#FFFFFF] border-[2px] border-[#E5E7EB] px-4 py-2 rounded-md hover:text-gray-900 font-medium">
              Login
            </button>
            <button className="bg-[#F54F35] text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors">
              Try For Free
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {/* {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-[#Fcf5f5] border-b md:hidden">
            <div className="px-4 py-2 space-y-4">
              <Link
                href="/"
                className="block text-gray-700 hover:text-gray-900 py-2"
              >
                Home
              </Link>
              <Link
                href="#"
                className="block text-gray-700 hover:text-gray-900 py-2"
              >
                Features
              </Link>
              <Link
                href="/pricings"
                className="block text-gray-700 hover:text-gray-900 py-2"
              >
                Pricing
              </Link>
              <Link
                href="#"
                className="block text-gray-700 hover:text-gray-900 py-2"
              >
                Solutions
              </Link>

              <hr className="border-t border-gray-200" />
              
                   
                  

              <div className=" flex  items-center justify-between gap-2 ">
                <button className="w-48 bg-[#F54F35] text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors">
                  Login
                </button>
                <button className="w-48 bg-[#F54F35] text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors">
                  Try For Free
                </button>
              </div>
            </div>
          </div>
        )} */}
        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />
      </div>
    </header>
  );
};

export default Header;
