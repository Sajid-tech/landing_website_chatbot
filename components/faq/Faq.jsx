"use client"
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';



const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
      {
        question: "What is RMax?",
        answer: "Qest, is a SaaS platform/ecosystem that lets any small to medium service business setup & manage their business quickly & easily."
      },
      {
        question: "How does it work?",
        answer: "Our platform provides integrated tools and features to streamline your business operations."
      },
      {
        question: "How much does it cost?",
        answer: "We offer flexible pricing plans tailored to your business needs."
      }
    ];
  
   
  return (
    <div className="max-w-3xl  mx-auto px-4 py-8">
      <div className="text-center flex flex-col items-center justify-center mb-8">
        <h1 className="text-[2.5rem]  font-bold mb-4">Frequently Asked Questions</h1>
        <div className=' w-[22rem] lg:w-[30.1rem]   '>
        <p className="text-gray-600    mb-2">
          Find answers to common questions about our services and features.
      
       
          For more details, contact our support team.
        </p>
        </div>
      </div>

      {/* Search Box */}
      <div className="flex items-center   justify-start   mb-4 rounded-sm  ">

      <div >
        <input
          type="text"
          placeholder="Ask Q! e.g Tell me about key Features."
          className=" px-4 py-2 w-[18.4rem] lg:w-[43rem] rounded-l-lg  outline-none text-gray-600 border-[1px] border-[#E5E7EB] placeholder-gray-400"
        />
        
      </div>
      <div>
      <button className="px-4 py-3 rounded-r-lg bg-[#F54F35] text-white ">
          <Search size={18} />
        </button>
      </div>
      
      </div>

      {/* FAQ List */}
      <div className="w-full">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="mb-2  bg-[#FFFFFF] border border-gray-300 rounded-lg p-5 text-left cursor-pointer"
            onClick={() => handleToggle(index)}
          >
            <div className="flex ] justify-between items-center">
              <h2 className="font-semibold text-black">{faq.question}</h2>
              {activeIndex === index ? <ChevronUp /> : <ChevronDown />}
            </div>
            {activeIndex === index && (
              <p className="mt-6  text-gray-500">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>


      <div className="text-center mt-6 mb-6">
        <p className="text-gray-900">
          Haven&#39;t got your answer?{' '}
          <a href="#" className="text-[#0000EE] font-[400] hover:underline">
            Contact our support now
          </a>
        </p>
      </div>
    </div>
  )
}

export default Faq