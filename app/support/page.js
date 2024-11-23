import ContactForm from "@/components/contactForm/ContactForm";
import ContactInfo from "@/components/contactForm/ContactInfo";
import { AiSearch } from "@/components/hero/Hero";
import React from "react";

/**
 * Contact Page Component
 *
 * This component represents the main contact page of the application. It houses
 * two key sections: the contact form and the contact information.
 *
 * The component is responsible for rendering the following:
 * - A section with a gradient background and the AiSearch component (likely a search bar).
 * - The ContactForm component, which allows users to submit inquiries or messages.
 * - The ContactInfo component, which displays the company's contact information, such as
 *   address, phone number, email, and social media links.
 *
 * The component ensures a consistent layout and styling for the contact page, providing
 * users with a seamless and organized way to get in touch with the company.
 *
 * The rendered Contact Page component.
 */

const page = () => {
  return (
    <div>
      {/* Gradient Background Section with Search Bar */}
      <div className="w-full mt-3  bg-gradient-to-r from-[#F8F8F8] via-[#FCF6F6] to-[#F9F7F5]  flex flex-col items-center justify-start ">
        <AiSearch />
      </div>
      {/* Contact Form Section */}
      <div className="mb-16">
        {" "}
        <ContactForm />
      </div>
      {/* Contact Information Section */}
      <div>
        {" "}
        <ContactInfo />
      </div>
    </div>
  );
};

export default page;
